import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { missionStatusEnum } from 'iknow-common/enums'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import dataValidators from './data-validators'
import { useApp } from '../app'

const MissionsContext = createContext(dataModels.context)

export const MissionsProvider: React.FC = ({ children }) => {
    const appProvider = useApp()
    const authProvider = useAuth()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [missions, setMissions] = useState(dataModels.missions)
    const [paginationData, setPaginationData] = useState(dataModels.paginationData)
    const [filtersFormData, setFiltersFormData] = useState(dataModels.filtersFormData)
    const [createFormData, setCreateFormData] = useState(dataModels.createFormData)
    const [invalidCreateFormData, setInvalidCreateFormData] = useState(dataModels.invalidCreateFormData)
    const [createSubmitted, setCreateSubmitted] = useState(false)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

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

    const clearFiltersForm = () => {
        setFiltersFormData(dataModels.filtersFormData)
    }

    const create = async () => {
        setCreateSubmitted(true)
        if (Object.values(invalidCreateFormData).some((message) => message !== undefined)) return
        setLoadingsData({ ...loadingsData, createSubmitting: true })
        const res = await services.missions.create(authProvider.token, createFormData, toastsProvider.addToast)
        if (res) {
            toastsProvider.addToast('Missão criada com sucesso', { appearance: 'success', autoDismiss: true })
            appProvider.navigateTo('/missoes')
        }
        setLoadingsData({ ...loadingsData, createSubmitting: false })
    }

    const clearCreateFormData = () => {
        setCreateFormData(dataModels.createFormData)
        setCreateSubmitted(false)
    }

    return (
        <MissionsContext.Provider value={{ missions,
            loadingsData,
            getMissions,
            filtersFormData,
            setFiltersFormData,
            clearFiltersForm,
            createFormData,
            setCreateFormData,
            invalidCreateFormData,
            setInvalidCreateFormData,
            createSubmitted,
            create,
            clearCreateFormData,
        }}
        >
            {children}
        </MissionsContext.Provider>
    )
}

export const useMissions = () => useContext(MissionsContext)
