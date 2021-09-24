import React from 'react'
import common from '../../common'

const missions: Array<typeof common.dataModels.mission> = []

const loadings: {
    searching: boolean,
    createSubmitting: boolean
    givingUp: boolean
    accepting: boolean,
} = {
    searching: false,
    createSubmitting: false,
    givingUp: false,
    accepting: false,
}

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
    clear: () => void,
    clearFiltersForm: () => void,
    createFormData: typeof createFormData,
    setCreateFormData: React.Dispatch<React.SetStateAction<typeof createFormData>>,
    invalidCreateFormData: typeof invalidCreateFormData,
    setInvalidCreateFormData:React.Dispatch<React.SetStateAction<typeof invalidCreateFormData>>,
    createSubmitted: boolean,
    create: () => Promise<any>,
    getNextPage: () => void,
    view: (mission: typeof common.dataModels.mission, dontNavigate?: boolean) => Promise<void>,
    missionInVisualization: typeof common.dataModels.mission
    giveUp: () => Promise<void>,
    accept: () => Promise<void>,
} = {
    missions,
    loadingsData: loadings,
    getMissions: () => undefined,
    filtersFormData,
    setFiltersFormData: () => undefined,
    clear: () => undefined,
    clearFiltersForm: () => undefined,
    createFormData,
    setCreateFormData: () => undefined,
    invalidCreateFormData,
    setInvalidCreateFormData: () => undefined,
    createSubmitted: false,
    create: async () => undefined,
    getNextPage: () => undefined,
    view: async (mission) => undefined,
    missionInVisualization: common.dataModels.mission,
    giveUp: async () => undefined,
    accept: async () => undefined,

}

export default { missions, context, loadings, filtersFormData, createFormData, invalidCreateFormData }
