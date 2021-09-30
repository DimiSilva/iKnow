import common from '../../common'

const loadings: {searching: boolean} = { searching: false }

const context: {
    myProfileData: typeof common.dataModels.profileData,
    loadingsData: typeof loadings,
    updateData: (updatedData: object) => Promise<any>,
    getMyProfileData: () => void
} = {
    myProfileData: common.dataModels.profileData,
    loadingsData: loadings,
    updateData: async (updatedData) => undefined,
    getMyProfileData: () => undefined,
}

export default { context, loadings }
