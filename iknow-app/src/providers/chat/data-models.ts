import common from '../../common'

const message: {
    _id?: string,
    from: {
        id: string,
        name: string,
    },
    to: {
        id: string,
        name: string,
    },
    text: string,
    createdAt: string,
    fromLoggedUser?: boolean,
} = {
    from: {
        id: '',
        name: '',
    },
    to: {
        id: '',
        name: '',
    },
    text: '',
    createdAt: '',
    fromLoggedUser: false,
}

const messages: Array<typeof message> = []

const loadings: {
    searching: boolean,
    sending: boolean
} = {
    searching: false,
    sending: false,
}

const context: {
    loadingsData: typeof loadings,
    messages: typeof messages
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
    recipientUser: typeof common.dataModels.profileData,
    call: (userId: string) => void,
    send: () => void
    clear: () => void
    getNextPage: () => void
} = {
    loadingsData: loadings,
    messages,
    message: '',
    setMessage: () => undefined,
    recipientUser: common.dataModels.profileData,
    call: (userId: string) => undefined,
    send: () => undefined,
    clear: () => undefined,
    getNextPage: () => undefined,
}

export default { context, loadings, message, messages }
