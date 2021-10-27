import React from 'react'
import common from '../../common'

const users: Array<typeof common.dataModels.user> = []

const loadings: {
    searching: boolean,
} = {
    searching: false,
}

const filtersFrom: {
    search: string
} = {
    search: '',
}

const context: {
    users: typeof users,
    loadingsData: typeof loadings,
    getUsers: () => void,
    filtersFormData: typeof filtersFrom,
    setFiltersFormData: React.Dispatch<React.SetStateAction<typeof filtersFrom>>,
    clear: () => void,
    clearFiltersForm: () => void,
    getNextPage: () => void,
} = {
    users,
    loadingsData: loadings,
    getUsers: () => undefined,
    filtersFormData: filtersFrom,
    setFiltersFormData: () => undefined,
    clear: () => undefined,
    clearFiltersForm: () => undefined,
    getNextPage: () => undefined,

}

export default { users, context, loadings, filtersFrom }
