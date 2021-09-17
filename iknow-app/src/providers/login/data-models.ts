const formData: {email: string, password: string} = {
    email: '',
    password: '',
}

const invalidFormData: { email: string | undefined, password: string | undefined } = { email: undefined, password: undefined }

const loadings: {submitting: boolean} = { submitting: false }

const context: {
    formData: typeof formData,
    setFormData: (newFormData: typeof formData) => void,
    invalidFormData: typeof invalidFormData,
    loadingsData: typeof loadings,
    submitted: boolean,
    login: () => Promise<void>,
} = {
    formData,
    setFormData: (newFormData: typeof formData) => {},
    invalidFormData,
    loadingsData: loadings,
    submitted: false,
    login: async () => {},
}

export default { formData, invalidFormData, context, loadings }
