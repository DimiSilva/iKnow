import common from '../../common'

const loadings: {searching: boolean} = { searching: false }

const context: {
    profileData: typeof common.dataModels.profileData,
    loadingsData: typeof loadings,
    call: (userId: string) => void
} = {
    profileData: common.dataModels.profileData,
    loadingsData: loadings,
    call: (userId) => undefined,
}

export default { context, loadings }
