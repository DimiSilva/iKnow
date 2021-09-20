import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { missionStatusEnum } from 'iknow-common/enums'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'

const MissionsContext = createContext(dataModels.context)

export const MissionsProvider: React.FC = ({ children }) => {
    const authProvider = useAuth()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [missions, setMissions] = useState(dataModels.missions)
    const [paginationData, setPaginationData] = useState(dataModels.paginationData)
    const [filtersFormData, setFiltersFormData] = useState(dataModels.filtersFormData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getMissions = async () => {
        setLoadingsData({ ...loadingsData, searching: true })
        const res = await services.missions.getAll(authProvider.token, _.omitBy({
            notBringMine: true,
            status: missionStatusEnum.IDLE,
            page: paginationData.page,
            perPage: paginationData.perPage,
            ...filtersFormData,
        }, _.isNil),
        toastsProvider.addToast)
        if (res) setMissions(res.data)
        setLoadingsData({ ...loadingsData, searching: false })
    }

    return (
        <MissionsContext.Provider value={{ missions, loadingsData, getMissions, filtersFormData, setFiltersFormData }}>
            {children}
        </MissionsContext.Provider>
    )
}

export const useMissions = () => useContext(MissionsContext)
