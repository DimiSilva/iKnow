const paginationData: {
    page: number,
    perPage: number,
    total : number,
    totalPages: number
} = {
    page: 1,
    perPage: 20,
    total: 0,
    totalPages: 0,
}

const mission: {
    _id: string,
    title: string,
    category: string,
    description: string,
    status: string,
    owner: { name: string, _id: string }
    acceptedBy?: { name: string, _id: string }
} = {
    _id: '',
    title: '',
    category: '',
    description: '',
    status: '',
    owner: { name: '', _id: '' },
}

const acknowledgement: {
    _id: string,
    title: string,
    type: string,
    description: string,
} = {
    _id: '',
    title: '',
    type: '',
    description: '',
}

const achievement: {
    _id: string,
    title: string,
    description: string,
    key: string,
    requiredQuantity:number,
    tier: string,
} = {
    _id: '',
    title: '',
    description: '',
    key: '',
    requiredQuantity: 0,
    tier: '',
}

const user: {
    _id: string,
    name: string,
    whoIAm: string,
} = {
    _id: '',
    name: '',
    whoIAm: '',
}

const missionsFiltersFormData: {
    search?: string,
    category?: string
    status?: string
} = {
    search: undefined,
    category: undefined,
    status: undefined,
}

const profileData: {
    name: string,
    phone: string,
    email: string,
    whoIAm: string,
    whatDoIDo: string,
    myInterests: string,
    totalEvalutions: number,
    evaluationsMedia: number,
    acknowledgements: Array<{
        user: string
        mission: string
        acknowledgement: typeof acknowledgement
    }>,
    achievements: Array<{
        user: string
        achievement: typeof achievement
    }>
} = {
    name: '',
    phone: '',
    email: '',
    whoIAm: '',
    whatDoIDo: '',
    myInterests: '',
    totalEvalutions: 0,
    evaluationsMedia: 0,
    acknowledgements: [],
    achievements: [],
}

export default { paginationData, mission, acknowledgement, achievement, user, missionsFiltersFormData, profileData }
