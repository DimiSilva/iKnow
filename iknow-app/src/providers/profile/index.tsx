import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import { useApp } from '../app'
import common from '../../common'

const ProfileContext = createContext(dataModels.context)

export const ProfileProvider: React.FC = ({ children }) => {
    const appProvider = useApp()
    const authProvider = useAuth()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [profileData, setProfileData] = useState(common.dataModels.profileData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getProfileData = async (userId: string) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.users.getProfileData(authProvider.token, userId, toastsProvider.addToast)
        if (res) setProfileData(res)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const call = (userId: string) => {
        appProvider.navigateTo('/perfil', true)
        getProfileData(userId)
    }

    return (
        <ProfileContext.Provider value={{ profileData, loadingsData, call }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => useContext(ProfileContext)
