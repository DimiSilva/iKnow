const myProfileData: {
    name: string,
    phone: string,
    email: string,
    whoIAm: string,
    whatDoIDo: string,
    myInterests: string,
    totalEvalutions: number,
    evaluationsMedia: number
} = {
    name: '',
    phone: '',
    email: '',
    whoIAm: '',
    whatDoIDo: '',
    myInterests: '',
    totalEvalutions: 0,
    evaluationsMedia: 0,
}

const invalidFormData: { email: string | undefined, password: string | undefined } = { email: undefined, password: undefined }

const loadings: {searching: boolean} = { searching: false }

const context: {
    myProfileData: typeof myProfileData,
    loadingsData: typeof loadings,
    updateData: (updatedData: object) => Promise<any>,
    getMyProfileData: () => void
} = {
    myProfileData,
    loadingsData: loadings,
    updateData: async (updatedData) => undefined,
    getMyProfileData: () => undefined,
}

export default { myProfileData, invalidFormData, context, loadings }
