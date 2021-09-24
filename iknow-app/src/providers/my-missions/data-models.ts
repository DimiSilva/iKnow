import React from 'react'

const missions: Array<{
    _id: string,
    title: string,
    category: string,
    description: string,
    status: string,
    owner: string
}> = []

const loadings: {searching: boolean, createSubmitting: boolean} = { searching: false, createSubmitting: false }

const filtersFormData: {
    search?: string,
    category?: string
} = {
    search: undefined,
    category: undefined,
}

const createFormData: {
    title: string,
    category: string,
    description: string,
} = {
    title: '',
    category: '',
    description: '',
}

const invalidCreateFormData: {
    title: string | undefined,
    category: string | undefined,
} = {
    title: undefined,
    category: undefined,
}

const context: {
    missions: typeof missions,
    loadingsData: typeof loadings,
    getMissions: () => void,
    filtersFormData: typeof filtersFormData,
    setFiltersFormData: React.Dispatch<React.SetStateAction<typeof filtersFormData>>,
    clearFiltersForm: () => void,
    createFormData: typeof createFormData,
    setCreateFormData: React.Dispatch<React.SetStateAction<typeof createFormData>>,
    invalidCreateFormData: typeof invalidCreateFormData,
    setInvalidCreateFormData:React.Dispatch<React.SetStateAction<typeof invalidCreateFormData>>,
    createSubmitted: boolean,
    create: () => Promise<any>,
    clearCreateFormData: () => void,
    getNextPage: () => void,
    clearMissions: () => void,
} = {
    missions,
    loadingsData: loadings,
    getMissions: () => undefined,
    filtersFormData,
    setFiltersFormData: () => undefined,
    clearFiltersForm: () => undefined,
    createFormData,
    setCreateFormData: () => undefined,
    invalidCreateFormData,
    setInvalidCreateFormData: () => undefined,
    createSubmitted: false,
    create: async () => undefined,
    clearCreateFormData: () => undefined,
    getNextPage: () => undefined,
    clearMissions: () => undefined,
}

export default { missions, context, loadings, filtersFormData, createFormData, invalidCreateFormData }
