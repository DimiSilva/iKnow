import React from 'react'

const missions: Array<{
    _id: string,
    title: string,
    type: string,
    subject: string,
    description: string,
    status: string,
    owner: string
}> = []

const loadings: {searching: boolean} = { searching: false }

const paginationData: {
    page: number,
    perPage: number,
    total : number,
    totalPages: number
} = {
    page: 1,
    perPage: 10,
    total: 0,
    totalPages: 0,
}

const filtersFormData: {
    search?: string,
    type?: string,
    subject?: string
} = {
    search: undefined,
    type: undefined,
    subject: undefined,
}

const context: {
    missions: typeof missions,
    loadingsData: typeof loadings,
    getMissions: () => void,
    filtersFormData: typeof filtersFormData,
    setFiltersFormData: React.Dispatch<React.SetStateAction<typeof filtersFormData>>
} = {
    missions,
    loadingsData: loadings,
    getMissions: () => undefined,
    filtersFormData,
    setFiltersFormData: () => undefined,
}

export default { missions, context, loadings, paginationData, filtersFormData }
