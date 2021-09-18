const formData: {name: string, email: string, phone: string, password: string} = {
    name: '',
    email: '',
    phone: '',
    password: '',
}

const invalidFormData: {
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
    formData: typeof formData,
    setFormData: (newFormData: typeof formData) => void,
    invalidFormData: typeof invalidFormData,
    loadingsData: typeof loadings,
    submitted: boolean,
    register: () => Promise<void>,
    clearForm: () => void
} = {
    formData,
    setFormData: (newFormData: typeof formData) => undefined,
    invalidFormData,
    loadingsData: loadings,
    submitted: false,
    register: async () => undefined,
    clearForm: () => undefined,
}

export default { formData, invalidFormData, context, loadings }
