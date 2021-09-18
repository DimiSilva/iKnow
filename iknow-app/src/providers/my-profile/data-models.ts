const myProfileData: {
    name: string,
    phone: string,
    email: string,
    whoIAm: string,
    whatDoIDo: string,
    myInterests: string,
} = {
    name: '',
    phone: '',
    email: '',
    whoIAm: '',
    whatDoIDo: '',
    myInterests: '',
}

const invalidFormData: { email: string | undefined, password: string | undefined } = { email: undefined, password: undefined }

const loadings: {searching: boolean} = { searching: false }

const context: {
    myProfileData: typeof myProfileData,
    loadingsData: typeof loadings,
    updateData: (updatedData: object) => Promise<any>
} = {
    myProfileData,
    loadingsData: loadings,
    updateData: async (updatedData) => undefined,
}

export default { myProfileData, invalidFormData, context, loadings }
