const profileData: {
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

const loadings: {searching: boolean} = { searching: false }

const context: {
    profileData: typeof profileData,
    loadingsData: typeof loadings,
    call: (userId: string) => void
} = {
    profileData,
    loadingsData: loadings,
    call: (userId) => undefined,
}

export default { profileData, context, loadings }
