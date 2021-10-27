import React from 'react'
import common from '../../common'

const missions: Array<typeof common.dataModels.mission> = []

const loadings: {
    searching: boolean,
    createSubmitting: boolean,
    unbinding: boolean,
    cancelling: boolean,
    completing: boolean
} = {
    searching: false,
    createSubmitting: false,
    unbinding: false,
    cancelling: false,
    completing: false,
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
    filtersFormData: typeof common.dataModels.missionsFiltersFormData,
    setFiltersFormData: React.Dispatch<React.SetStateAction<typeof common.dataModels.missionsFiltersFormData>>,
    clearFiltersForm: () => void,
    clear: () => void,
    createFormData: typeof createFormData,
    setCreateFormData: React.Dispatch<React.SetStateAction<typeof createFormData>>,
    invalidCreateFormData: typeof invalidCreateFormData,
    setInvalidCreateFormData:React.Dispatch<React.SetStateAction<typeof invalidCreateFormData>>,
    createSubmitted: boolean,
    create: () => Promise<any>,
    getNextPage: () => void,
    view: (mission: typeof common.dataModels.mission, dontNavigate?: boolean) => Promise<void>,
    missionInVisualization: typeof common.dataModels.mission
    unbind: () => Promise<void>,
    cancel: () => Promise<void>,
    complete: () => Promise<void>,
    evaluation: undefined | number,
    setEvaluation: React.Dispatch<React.SetStateAction<undefined|number>>,
    acknowledgement: undefined | typeof common.dataModels.acknowledgement,
    setAcknowledgement: React.Dispatch<React.SetStateAction<undefined|typeof common.dataModels.acknowledgement>>,
} = {
    missions,
    loadingsData: loadings,
    getMissions: () => undefined,
    filtersFormData: common.dataModels.missionsFiltersFormData,
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
    unbind: async () => undefined,
    cancel: async () => undefined,
    complete: async () => undefined,
    evaluation: undefined,
    setEvaluation: () => undefined,
    acknowledgement: undefined,
    setAcknowledgement: () => undefined,
}

export default { missions, context, loadings, createFormData, invalidCreateFormData }
