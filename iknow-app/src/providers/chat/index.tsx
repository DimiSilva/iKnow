/* eslint-disable no-undef */
import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import io, { Socket } from 'socket.io-client'
import common from '../../common'
import services from '../../services'
import { useApp } from '../app'
import { useAuth } from '../auth'
import { useSocket } from '../socket'
import dataModels from './data-models'

const ChatContext = createContext(dataModels.context)

export const ChatProvider: React.FC = ({ children }) => {
    const appProvider = useApp()
    const authProvider = useAuth()
    const socketProvider = useSocket()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<typeof dataModels.messages>(dataModels.messages)
    const [paginationData, setPaginationData] = useState(common.dataModels.paginationData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [recipientUser, setRecipientUser] = useState(common.dataModels.profileData)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(() => {
        if (alreadyRanOnce) {
            if (recipientUser.id) {
                appProvider.setCurrentPageTitle(recipientUser.name)
                if (socketProvider.socket)
                    socketProvider.socket.on('private message', ({ content, from }) => {
                        if (from === recipientUser.id) {
                            setMessages((messages) => [...messages, {
                                createdAt: new Date().toISOString(),
                                from: {
                                    id: from,
                                    name: recipientUser.name,
                                },
                                text: content,
                                to: {
                                    id: authProvider.loggedUserData.userId,
                                    name: authProvider.loggedUserData.name,
                                },
                                fromLoggedUser: false,
                            }])
                        }
                    })

                getMessages()
            }
        }

        return () => {
            if (socketProvider.socket) socketProvider.socket.off('private message')
        }
    }, [recipientUser])

    const getNextPage = () => (messages.length < paginationData.total && recipientUser.id) && getMessages({ ...paginationData, page: paginationData.page + 1 })

    const getMessages = async (paginationDataAsParam?: typeof common.dataModels.paginationData) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.messages.getMine(authProvider.token, _.omitBy({
            withUser: recipientUser.id,
            createdAtMax: messages.length > 0
                ? messages.reduce<any>((mostOldMessageDate, message) => (
                    !mostOldMessageDate
                        ? message.createdAt
                        : new Date(mostOldMessageDate) > new Date(message.createdAt)
                            ? message.createdAt
                            : mostOldMessageDate
                ), new Date().toISOString())
                : undefined,
            perPage: paginationDataAsParam ? paginationDataAsParam.perPage : paginationData.perPage,
        }, _.isNil),
        toastsProvider.addToast)
        setLoadingsData((loadingsData) => {
            if (res) {
                const newMessages = res.data.map((message: any) => {
                    const fromLoggedUser = message.from === authProvider.loggedUserData.userId
                    return {
                        ...message,
                        from: {
                            id: message.from,
                            name: fromLoggedUser ? authProvider.loggedUserData.name : recipientUser.name,
                        },
                        to: {
                            id: message.to,
                            name: !fromLoggedUser ? authProvider.loggedUserData.name : recipientUser.name,
                        },
                        text: message.content,
                        fromLoggedUser,
                    }
                })
                const newMessagesSet = [...newMessages, ...messages]
                const uniqueMessagesIds = Array.from(new Set(newMessagesSet.map((newMessage) => newMessage._id)))
                setMessages(uniqueMessagesIds.map((uniqueMessageId) => newMessagesSet.find((newMessage) => newMessage._id === uniqueMessageId)))
                setPaginationData({ ...(paginationDataAsParam || paginationData), total: res.total, totalPages: res.totalPages })
            }
            return ({ ...loadingsData, searching: false })
        })
    }

    const getProfileData = async (userId: string) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.users.getProfileData(authProvider.token, { userId, checkIfIsConnected: true }, toastsProvider.addToast)
        if (res) setRecipientUser({ id: userId, ...res })
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const call = async (userId: string) => {
        appProvider.navigateTo('/conversa', true)

        await getProfileData(userId)
    }

    const send = () => {
        if (socketProvider.socket) {
            socketProvider.socket.emit('private message', {
                to: recipientUser.id,
                content: message,
            })
        }

        setMessages((messages) => [...messages, {
            createdAt: new Date().toISOString(),
            from: {
                id: authProvider.loggedUserData.userId,
                name: authProvider.loggedUserData.name,
            },
            text: message,
            to: {
                id: recipientUser.id,
                name: recipientUser.name,
            },
            fromLoggedUser: true,
        }])

        setTimeout(() => setMessage(''), 10)
    }

    const clear = () => {
        if (socketProvider.socket) socketProvider.socket.off('private message')
        setMessages([])
        setMessage('')
        setRecipientUser(common.dataModels.profileData)
        setLoadingsData(dataModels.loadings)
        setPaginationData(common.dataModels.paginationData)
    }

    return (
        <ChatContext.Provider value={{
            messages,
            message,
            setMessage,
            loadingsData,
            recipientUser,
            call,
            send,
            clear,
            getNextPage,
        }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext)
