const context: {
    token: string,
    setToken: (token: string) => void,
    tokenLoaded: boolean,
    logout: () => void
} = {
    token: '',
    setToken: (token) => undefined,
    tokenLoaded: false,
    logout: () => undefined,
}

export default { context }
