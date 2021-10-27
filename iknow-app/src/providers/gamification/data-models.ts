import common from '../../common'

const achievements: Array<typeof common.dataModels.achievement> = []

const acknowledgements: Array<typeof common.dataModels.acknowledgement> = []

const loadings: {
    searchingAcknowledgements: boolean
    searchingAchievements: boolean
} = {
    searchingAcknowledgements: false,
    searchingAchievements: false,
}

const context: {
    achievements: typeof achievements,
    acknowledgements: typeof acknowledgements,
    loadingsData: typeof loadings,
    getAcknowledgements: () => Promise<void>,
    getAchievements: () => Promise<void>
} = {
    achievements,
    acknowledgements,
    loadingsData: loadings,
    getAcknowledgements: async () => undefined,
    getAchievements: async () => undefined,
}

export default { achievements, acknowledgements, context, loadings }
