const loggedUser: {
    email: string,
    name: string,
    userId: string
} = {
    email: '',
    name: '',
    userId: '',
}

const context: {
    token: string,
    setToken: (token: string) => void,
    tokenLoaded: boolean,
    logout: () => void
    loggedUserData: typeof loggedUser
} = {
    token: '',
    setToken: (token) => undefined,
    tokenLoaded: false,
    logout: () => undefined,
    loggedUserData: loggedUser,
}

export default { context, loggedUser }
