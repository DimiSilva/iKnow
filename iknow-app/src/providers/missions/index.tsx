import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { missionStatusEnum } from 'iknow-common/enums'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import dataValidators from './data-validators'
import { useApp } from '../app'
import common from '../../common'

const MissionsContext = createContext(dataModels.context)

export const MissionsProvider: React.FC = ({ children }) => {
    const appContext = useApp()
    const authContext = useAuth()
    const toastsContext = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [missions, setMissions] = useState(dataModels.missions)
    const [paginationData, setPaginationData] = useState(common.dataModels.paginationData)
    const [filtersFormData, setFiltersFormData] = useState(common.dataModels.missionsFiltersFormData)
    const [createFormData, setCreateFormData] = useState(dataModels.createFormData)
    const [invalidCreateFormData, setInvalidCreateFormData] = useState(dataModels.invalidCreateFormData)
    const [createSubmitted, setCreateSubmitted] = useState(false)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [missionInVisualization, setMissionInVisualization] = useState(common.dataModels.mission)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(dataValidators.createAll({
        formData: createFormData,
        invalidFormData: invalidCreateFormData,
        setInvalidFormData: setInvalidCreateFormData,
        shouldRunValidation: true }),
    [])
    useEffect(dataValidators.createTitle({
        formData: createFormData,
        invalidFormData: invalidCreateFormData,
        setInvalidFormData: setInvalidCreateFormData,
        shouldRunValidation: alreadyRanOnce,
    }),
    [createFormData.title])
    useEffect(dataValidators.createCategory({
        formData: createFormData,
        invalidFormData: invalidCreateFormData,
        setInvalidFormData: setInvalidCreateFormData,
        shouldRunValidation: alreadyRanOnce,
    }),
    [createFormData.category])

    const getNextPage = () => {
        if (paginationData.page < paginationData.totalPages) getMissions({ ...paginationData, page: paginationData.page + 1 })
    }

    const getMissions = async (paginationDataAsParam?: typeof common.dataModels.paginationData) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.missions.getAll(authContext.token, _.omitBy({
            notBringMine: true,
            page: paginationDataAsParam ? paginationDataAsParam.page : paginationData.page,
            perPage: paginationDataAsParam ? paginationDataAsParam.perPage : paginationData.perPage,
            ...filtersFormData,
            status: missionStatusEnum.IDLE,
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

    const create = async () => {
        setCreateSubmitted(true)
        if (Object.values(invalidCreateFormData).some((message) => message !== undefined)) return
        setLoadingsData((loadingsData) => ({ ...loadingsData, createSubmitting: true }))
        const res = await services.missions.create(authContext.token, createFormData, toastsContext.addToast)
        if (res) {
            toastsContext.addToast('Miss??o criada com sucesso', { appearance: 'success', autoDismiss: true })
            appContext.navigateTo('/missoes')
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, createSubmitting: false }))
    }

    const view = async (mission: typeof common.dataModels.mission, dontNavigate?: boolean) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        if (!dontNavigate) appContext.navigateTo('/missoes/visualizacao', true)
        const res = await services.missions.getOne(authContext.token, mission._id, toastsContext.addToast)
        if (res) setMissionInVisualization(res)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const giveUp = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, givingUp: true }))
        const res = await services.missions.giveUp(authContext.token, missionInVisualization._id, toastsContext.addToast)
        if (res) {
            toastsContext.addToast('Voc?? desistiu da miss??o', { appearance: 'success', autoDismiss: true })
            view(missionInVisualization, true)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, givingUp: false }))
    }

    const accept = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, accepting: true }))
        const res = await services.missions.accept(authContext.token, missionInVisualization._id, toastsContext.addToast)
        if (res) {
            toastsContext.addToast('Voc?? aceitou a miss??o', { appearance: 'success', autoDismiss: true })
            view(missionInVisualization, true)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, accepting: false }))
    }

    const clear = () => {
        setFiltersFormData(common.dataModels.missionsFiltersFormData)
        setCreateFormData(dataModels.createFormData)
        setCreateSubmitted(false)
        setPaginationData(common.dataModels.paginationData)
        setMissions([])
    }

    return (
        <MissionsContext.Provider value={{
            missions,
            loadingsData,
            getMissions,
            filtersFormData,
            setFiltersFormData,
            clearFiltersForm,
            clear,
            createFormData,
            setCreateFormData,
            invalidCreateFormData,
            setInvalidCreateFormData,
            createSubmitted,
            create,
            getNextPage,
            missionInVisualization,
            view,
            giveUp,
            accept,
        }}
        >
            {children}
        </MissionsContext.Provider>
    )
}

export const useMissions = () => useContext(MissionsContext)
