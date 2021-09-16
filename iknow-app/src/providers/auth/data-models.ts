const context: {
    token: string,
    setToken: (token: string) => void,
    tokenLoaded: boolean
} = {
    token: '',
    setToken: (token) => undefined,
    tokenLoaded: false,
}

export default { context }
