import _ from 'lodash'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import common from '../../common'
import services from '../../services'
import { useAuth } from '../auth'
import dataModels from './data-models'

const NetworkContext = createContext(dataModels.context)

export const NetworkProvider: React.FC = ({ children }) => {
    const authContext = useAuth()
    const toastsContext = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [users, setUsers] = useState(dataModels.users)
    const [paginationData, setPaginationData] = useState(common.dataModels.paginationData)
    const [filtersFormData, setFiltersFormData] = useState(dataModels.filtersFrom)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    const getNextPage = () => {
        if (paginationData.page < paginationData.totalPages) getUsers({ ...paginationData, page: paginationData.page + 1 })
    }

    const getUsers = async (paginationDataAsParam?: typeof common.dataModels.paginationData) => {
        setLoadingsData((loadingsData) => ({ ...loadingsData, searching: true }))
        const res = await services.users.getContacts(authContext.token, _.omitBy({
            page: paginationDataAsParam ? paginationDataAsParam.page : paginationData.page,
            perPage: paginationDataAsParam ? paginationDataAsParam.perPage : paginationData.perPage,
            ...filtersFormData,
        }, _.isNil),
        toastsContext.addToast)
        setLoadingsData((loadingsData) => {
            if (res) {
                const newUsersSet = [...users, ...res.data]
                const uniqueUsersIds = Array.from(new Set(newUsersSet.map((newUser) => newUser._id)))
                setUsers(uniqueUsersIds.map((id) => newUsersSet.find((newUser) => newUser._id === id)))
                setPaginationData({ ...(paginationDataAsParam || paginationData), total: res.total, totalPages: res.totalPages })
            }
            return ({ ...loadingsData, searching: false })
        })
    }

    const clearFiltersForm = () => {
        setFiltersFormData(dataModels.filtersFrom)
    }

    const clear = () => {
        setFiltersFormData(dataModels.filtersFrom)
        setPaginationData(common.dataModels.paginationData)
        setUsers([])
    }

    return (
        <NetworkContext.Provider value={{
            users,
            loadingsData,
            getUsers,
            filtersFormData,
            setFiltersFormData,
            clearFiltersForm,
            clear,
            getNextPage,
        }}
        >
            {children}
        </NetworkContext.Provider>
    )
}

export const useNetwork = () => useContext(NetworkContext)
