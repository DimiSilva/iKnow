import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import dataValidators from './data-validators'
import { useApp } from '../app'
import common from '../../common'

const MyMissionsContext = createContext(dataModels.context)

export const MyMissionsProvider: React.FC = ({ children }) => {
    const appProvider = useApp()
    const authProvider = useAuth()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [missions, setMissions] = useState(dataModels.missions)
    const [paginationData, setPaginationData] = useState(common.dataModels.paginationData)
    const [filtersFormData, setFiltersFormData] = useState(common.dataModels.missionsFiltersFormData)
    const [createFormData, setCreateFormData] = useState(dataModels.createFormData)
    const [invalidCreateFormData, setInvalidCreateFormData] = useState(dataModels.invalidCreateFormData)
    const [createSubmitted, setCreateSubmitted] = useState(false)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [missionInVisualization, setMissionInVisualization] = useState(common.dataModels.mission)
    const [evaluation, setEvaluation] = useState<undefined|number>()
    const [acknowledgement, setAcknowledgement] = useState<undefined|typeof common.dataModels.acknowledgement>()

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

    const getNextPage = () => (paginationData.page < paginationData.totalPages) && getMissions({ ...paginationData, page: paginationData.page + 1 })

    const getMissions = async (paginationDataAsParam?: typeof common.dataModels.paginationData) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.missions.getMine(authProvider.token, _.omitBy({
            page: paginationDataAsParam ? paginationDataAsParam.page : paginationData.page,
            perPage: paginationDataAsParam ? paginationDataAsParam.perPage : paginationData.perPage,
            ...filtersFormData,
        }, _.isNil),
        toastsProvider.addToast)
        if (res) {
            const newMissionsSet = [...missions, ...res.data]
            const uniqueMissionsIds = Array.from(new Set(newMissionsSet.map((newMission) => newMission._id)))
            setMissions(uniqueMissionsIds.map((id) => newMissionsSet.find((newMission) => newMission._id === id)))
            setPaginationData({ ...(paginationDataAsParam || paginationData), total: res.total, totalPages: res.totalPages })
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const clearFiltersForm = () => setFiltersFormData(common.dataModels.missionsFiltersFormData)

    const create = async () => {
        setCreateSubmitted(true)
        if (Object.values(invalidCreateFormData).some((message) => message !== undefined)) return
        setLoadingsData((loadingsData) => ({ ...loadingsData, createSubmitting: true }))
        const res = await services.missions.create(authProvider.token, createFormData, toastsProvider.addToast)
        if (res) {
            toastsProvider.addToast('Missão criada com sucesso', { appearance: 'success', autoDismiss: true })
            appProvider.navigateTo('/meu-perfil/missoes')
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, createSubmitting: false }))
    }

    const view = async (mission: typeof common.dataModels.mission, dontNavigate?: boolean, dontGoBack?: boolean) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        if (!dontNavigate) appProvider.navigateTo('/meu-perfil/missoes/visualizacao', !dontGoBack)
        const res = await services.missions.getOne(authProvider.token, mission._id, toastsProvider.addToast)
        if (res) setMissionInVisualization(res)
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: false }))
    }

    const complete = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, completing: true }))
        const res = await services.missions.complete(authProvider.token,
            missionInVisualization._id,
            { acknowledgement: (acknowledgement || {})._id, evaluation },
            toastsProvider.addToast)
        if (res) {
            toastsProvider.addToast('Você finalizou da missão', { appearance: 'success', autoDismiss: true })
            view(missionInVisualization, false, true)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, completing: false }))
    }

    const unbind = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, unbinding: true }))
        const res = await services.missions.unbind(authProvider.token, missionInVisualization._id, toastsProvider.addToast)
        if (res) {
            toastsProvider.addToast('Você desistiu da missão', { appearance: 'success', autoDismiss: true })
            view(missionInVisualization, true)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, unbinding: false }))
    }

    const cancel = async () => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, cancelling: true }))
        const res = await services.missions.cancel(authProvider.token, missionInVisualization._id, toastsProvider.addToast)
        if (res) {
            toastsProvider.addToast('Você cancelou a missão', { appearance: 'success', autoDismiss: true })
            view(missionInVisualization, true)
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, cancelling: false }))
    }

    const clear = () => {
        setFiltersFormData(common.dataModels.missionsFiltersFormData)
        setCreateFormData(dataModels.createFormData)
        setCreateSubmitted(false)
        setPaginationData(common.dataModels.paginationData)
        setEvaluation(undefined)
        setAcknowledgement(undefined)
        setMissions([])
    }

    return (
        <MyMissionsContext.Provider
            value={{ missions,
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
                unbind,
                cancel,
                complete,
                evaluation,
                setEvaluation,
                acknowledgement,
                setAcknowledgement,
            }}
        >
            {children}
        </MyMissionsContext.Provider>
    )
}

export const useMyMissions = () => useContext(MyMissionsContext)
