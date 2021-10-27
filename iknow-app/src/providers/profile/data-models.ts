import common from '../../common'

const loadings: {
    searching: boolean,
    addingContact: boolean,
    removingContact: boolean,
} = {
    searching: false,
    addingContact: false,
    removingContact: false,
}

const context: {
    profileData: typeof common.dataModels.profileData,
    loadingsData: typeof loadings,
    call: (userId: string) => void,
    addContact: () => Promise<void>,
    removeContact: () => Promise<void>
} = {
    profileData: common.dataModels.profileData,
    loadingsData: loadings,
    call: (userId) => undefined,
    addContact: async () => undefined,
    removeContact: async () => undefined,
}

export default { context, loadings }
