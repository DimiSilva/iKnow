const login: {email: string, password: string} = {
    email: '',
    password: '',
}

const invalidLogin: { email: string | undefined, password: string | undefined } = { email: undefined, password: undefined }

const loadings: {submitting: boolean} = { submitting: false }

const context: {
    loginData: typeof login,
    setLoginData: (newLoginData: typeof login) => void,
    invalidLoginData: typeof invalidLogin,
    loadingsData: typeof loadings,
    submitted: boolean,
    login: () => Promise<void>,
    token: string
    navigateTo: (path: string) => void
} = {
    loginData: login,
    setLoginData: (newLoginData: typeof login) => {},
    invalidLoginData: invalidLogin,
    loadingsData: loadings,
    submitted: false,
    login: async () => {},
    token: '',
    navigateTo: (path) => undefined,
}

export default { login, invalidLogin, context, loadings }
