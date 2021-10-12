import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import { useApp } from '../app'
import common from '../../common'

const ProfileContext = createContext(dataModels.context)

export const ProfileProvider: React.FC = ({ children }) => {
    const appContext = useApp()
    const authContext = useAuth()
    const toastsContext = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [profileData, setProfileData] = useState(common.dataModels.profileData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getProfileData = async (userId: string) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.users.getProfileData(authContext.token, { userId, checkIfIsConnected: true }, toastsContext.addToast)
        if (res) setProfileData(res)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const call = (userId: string) => {
        appContext.navigateTo('/perfil', true)
        getProfileData(userId)
    }

    const addContact = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, addingContact: true }))
        const res = await services.users.addContact(authContext.token, { userId: profileData.id }, toastsContext.addToast)
        if (res) {
            toastsContext.addToast('Você adicionou o contato com sucesso', { appearance: 'success', autoDismiss: true })
            call(profileData.id)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, addingContact: false }))
    }

    const removeContact = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, removingContact: true }))
        const res = await services.users.removeContact(authContext.token, { userId: profileData.id }, toastsContext.addToast)
        if (res) {
            toastsContext.addToast('Você removeu o contato com sucesso', { appearance: 'success', autoDismiss: true })
            call(profileData.id)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, removingContact: false }))
    }

    return (
        <ProfileContext.Provider value={{ profileData, loadingsData, call, addContact, removeContact }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => useContext(ProfileContext)
