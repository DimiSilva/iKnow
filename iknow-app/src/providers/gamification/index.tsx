import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import { useApp } from '../app'

const GamificationContext = createContext(dataModels.context)

export const GamificationProvider: React.FC = ({ children }) => {
    const appProvider = useApp()
    const authProvider = useAuth()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [achievements, setAchievements] = useState(dataModels.achievements)
    const [acknowledgements, setAcknowledgements] = useState(dataModels.acknowledgements)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getAcknowledgements = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searchingAcknowledgements: true }))
        const res = await services.acknowledgements.getAll(authProvider.token, { page: 1, perPage: 1000 }, toastsProvider.addToast)
        if (res) setAcknowledgements(res.data)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searchingAcknowledgements: false }))
    }

    const getAchievements = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searchingAchievements: true }))
        const res = await services.achievements.getAll(authProvider.token, { page: 1, perPage: 1000 }, toastsProvider.addToast)
        if (res) setAchievements(res.data)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searchingAchievements: false }))
    }

    return (
        <GamificationContext.Provider value={{ achievements, acknowledgements, loadingsData, getAcknowledgements, getAchievements }}>
            {children}
        </GamificationContext.Provider>
    )
}

export const useGamification = () => useContext(GamificationContext)
