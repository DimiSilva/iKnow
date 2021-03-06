import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import common from '../../common'

const MyProfileContext = createContext(dataModels.context)

export const MyProfileProvider: React.FC = ({ children }) => {
    const authContext = useAuth()
    const toastsContext = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [myProfileData, setMyProfileData] = useState(common.dataModels.profileData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getMyProfileData = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.users.getMyProfileData(authContext.token, toastsContext.addToast)
        if (res) setMyProfileData(res)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const updateData = async (updatedData: object) => {
        await services.users.updateMyProfileData(authContext.token, updatedData, toastsContext.addToast)
        await getMyProfileData()
    }

    return (
        <MyProfileContext.Provider value={{ myProfileData, loadingsData, updateData, getMyProfileData }}>
            {children}
        </MyProfileContext.Provider>
    )
}

export const useMyProfile = () => useContext(MyProfileContext)
