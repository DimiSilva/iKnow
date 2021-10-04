/* eslint-disable no-undef */
import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import io, { Socket } from 'socket.io-client'
import common from '../../common'
import services from '../../services'
import { useApp } from '../app'
import { useAuth } from '../auth'
import dataModels from './data-models'

const ChatContext = createContext(dataModels.context)

export const ChatProvider: React.FC = ({ children }) => {
    const appProvider = useApp()
    const authProvider = useAuth()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<typeof dataModels.messages>(dataModels.messages)
    const [paginationData, setPaginationData] = useState(common.dataModels.paginationData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [recipientUser, setRecipientUser] = useState(common.dataModels.profileData)
    const [socket, setSocket] = useState<Socket | undefined>()

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(() => {
        if (alreadyRanOnce && !!socket) {
            socket.on('private message', ({ content, from }) => {
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
    }, [socket])

    useEffect(() => {
        if (alreadyRanOnce) {
            appProvider.setCurrentPageTitle(recipientUser.name)
        }
    }, [recipientUser])

    const getNextPage = () => {
        if (paginationData.page < paginationData.totalPages) getMessages({ ...paginationData, page: paginationData.page + 1 })
    }

    console.log(messages)

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
                ), undefined)
                : undefined,
            page: paginationDataAsParam ? paginationDataAsParam.page : paginationData.page,
            perPage: paginationDataAsParam ? paginationDataAsParam.perPage : paginationData.perPage,
        }, _.isNil),
        toastsProvider.addToast)
        setLoadingsData((loadingsData) => {
            if (res) {
                const newMessagesSet = [...res.data, ...messages]
                const uniqueMessagesIds = Array.from(new Set(newMessagesSet.map((newMessage) => newMessage._id)))
                setMessages(uniqueMessagesIds.map((id) => {
                    const message = newMessagesSet.find((newMessage) => newMessage._id === id)
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
                }))
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

        const socket = io(process.env.REACT_APP_BASE_API_URL || '', {
            auth: {
                userId: authProvider.loggedUserData.userId,
            },
        })

        await getProfileData(userId)
        setSocket(socket)
    }

    const send = () => {
        if (socket) {
            socket.emit('private message', {
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
        if (socket) {
            socket.disconnect()
            setSocket(undefined)
        }
        setMessages([])
        setMessage('')
        setRecipientUser(common.dataModels.profileData)
        setLoadingsData(dataModels.loadings)
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
