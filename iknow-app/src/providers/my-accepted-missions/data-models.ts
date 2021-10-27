import React from 'react'
import common from '../../common'

const missions: Array<typeof common.dataModels.mission> = []

const loadings: {
    searching: boolean,
    givingUp: boolean
} = {
    searching: false,
    givingUp: false,
}

const context: {
    missions: typeof missions,
    loadingsData: typeof loadings,
    getMissions: () => void,
    filtersFormData: typeof common.dataModels.missionsFiltersFormData,
    setFiltersFormData: React.Dispatch<React.SetStateAction<typeof common.dataModels.missionsFiltersFormData>>,
    clear: () => void,
    clearFiltersForm: () => void,
    getNextPage: () => void,
    view: (mission: typeof common.dataModels.mission, dontNavigate?: boolean) => Promise<void>,
    missionInVisualization: typeof common.dataModels.mission
    giveUp: () => Promise<void>,
} = {
    missions,
    loadingsData: loadings,
    getMissions: () => undefined,
    filtersFormData: common.dataModels.missionsFiltersFormData,
    setFiltersFormData: () => undefined,
    clear: () => undefined,
    clearFiltersForm: () => undefined,
    getNextPage: () => undefined,
    view: async (mission) => undefined,
    missionInVisualization: common.dataModels.mission,
    giveUp: async () => undefined,

}

export default { missions, context, loadings }
