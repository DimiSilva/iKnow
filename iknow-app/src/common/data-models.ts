const paginationData: {
    page: number,
    perPage: number,
    total : number,
    totalPages: number
} = {
    page: 1,
    perPage: 10,
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

export default { paginationData, mission }
