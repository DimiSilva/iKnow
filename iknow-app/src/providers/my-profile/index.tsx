import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'

const MyProfileContext = createContext(dataModels.context)

export const MyProfileProvider: React.FC = ({ children }) => {
    const authProvider = useAuth()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [myProfileData, setMyProfileData] = useState(dataModels.myProfileData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getMyProfileData = async () => {
        setLoadingsData({ ...loadingsData, searching: true })
        const res = await services.users.getMyProfileData(authProvider.token, toastsProvider.addToast)
        if (res) setMyProfileData(res)
        setLoadingsData({ ...loadingsData, searching: false })
    }

    const updateData = async (updatedData: object) => {
        await services.users.updateMyProfileData(authProvider.token, updatedData, toastsProvider.addToast)
        await getMyProfileData()
    }

    return (
        <MyProfileContext.Provider value={{ myProfileData, loadingsData, updateData, getMyProfileData }}>
            {children}
        </MyProfileContext.Provider>
    )
}

export const useMyProfile = () => useContext(MyProfileContext)
