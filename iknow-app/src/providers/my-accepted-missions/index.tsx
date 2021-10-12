import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import common from '../../common'
import services from '../../services'
import { useApp } from '../app'
import { useAuth } from '../auth'
import dataModels from './data-models'

const MyAcceptedMissionsContext = createContext(dataModels.context)

export const MyAcceptedMissionsProvider: React.FC = ({ children }) => {
    const appContext = useApp()
    const authContext = useAuth()
    const toastsContext = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [missions, setMissions] = useState(dataModels.missions)
    const [paginationData, setPaginationData] = useState(common.dataModels.paginationData)
    const [filtersFormData, setFiltersFormData] = useState(common.dataModels.missionsFiltersFormData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [missionInVisualization, setMissionInVisualization] = useState(common.dataModels.mission)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getNextPage = () => {
        if (paginationData.page < paginationData.totalPages) getMissions({ ...paginationData, page: paginationData.page + 1 })
    }

    const getMissions = async (paginationDataAsParam?: typeof common.dataModels.paginationData) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.missions.getAll(authContext.token, _.omitBy({
            notBringMine: true,
            bringMyAccepts: true,
            page: paginationDataAsParam ? paginationDataAsParam.page : paginationData.page,
            perPage: paginationDataAsParam ? paginationDataAsParam.perPage : paginationData.perPage,
            ...filtersFormData,
        }, _.isNil),
        toastsContext.addToast)
        setLoadingsData((loadingsData) => {
            if (res) {
                const newMissionsSet = [...missions, ...res.data]
                const uniqueMissionsIds = Array.from(new Set(newMissionsSet.map((newMission) => newMission._id)))
                setMissions(uniqueMissionsIds.map((id) => newMissionsSet.find((newMission) => newMission._id === id)))
                setPaginationData({ ...(paginationDataAsParam || paginationData), total: res.total, totalPages: res.totalPages })
            }
            return ({ ...loadingsData, searching: false })
        })
    }

    const clearFiltersForm = () => {
        setFiltersFormData(common.dataModels.missionsFiltersFormData)
    }

    const view = async (mission: typeof common.dataModels.mission, dontNavigate?: boolean) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        if (!dontNavigate) appContext.navigateTo('/meu-perfil/missoes-aceitas/visualizacao', true)
        const res = await services.missions.getOne(authContext.token, mission._id, toastsContext.addToast)
        if (res) setMissionInVisualization(res)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const giveUp = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, givingUp: true }))
        const res = await services.missions.giveUp(authContext.token, missionInVisualization._id, toastsContext.addToast)
        if (res) {
            toastsContext.addToast('Você desistiu da missão', { appearance: 'success', autoDismiss: true })
            view(missionInVisualization, true)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, givingUp: false }))
    }

    const clear = () => {
        setFiltersFormData(common.dataModels.missionsFiltersFormData)
        setPaginationData(common.dataModels.paginationData)
        setMissions([])
    }

    return (
        <MyAcceptedMissionsContext.Provider value={{
            missions,
            loadingsData,
            getMissions,
            filtersFormData,
            setFiltersFormData,
            clearFiltersForm,
            clear,
            getNextPage,
            missionInVisualization,
            view,
            giveUp,
        }}
        >
            {children}
        </MyAcceptedMissionsContext.Provider>
    )
}

export const useMyAcceptedMissions = () => useContext(MyAcceptedMissionsContext)
