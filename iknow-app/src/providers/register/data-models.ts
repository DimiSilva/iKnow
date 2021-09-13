const register: {name: string, email: string, phone: string, password: string} = {
    name: '',
    email: '',
    phone: '',
    password: '',
}

const invalidRegister: {
    name: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    password: string | undefined
} = {
    name: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
}

const loadings: {submitting: boolean} = { submitting: false }

const context: {
    registerData: typeof register,
    setRegisterData: (newLoginData: typeof register) => void,
    invalidRegisterData: typeof invalidRegister,
    loadingsData: typeof loadings,
    submitted: boolean,
    register: () => Promise<void>
} = {
    registerData: register,
    setRegisterData: (newRegisterData: typeof register) => {},
    invalidRegisterData: invalidRegister,
    loadingsData: loadings,
    submitted: false,
    register: async () => {},
}

export default { register, invalidRegister, context, loadings }
