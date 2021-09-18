const formData: {field: string} = {
    field: '',
}

const invalidFormData: { field: string | undefined } = { field: undefined }

const loadings: {submitting: boolean} = { submitting: false }

const fieldContext: { pageTitle: string,
    backPath: string,
    onSave: (updatedData: object) => Promise<any>,
    initialValue?: string
    fieldLabel: string,
    fieldMaxLength?: number,
    isValidCheck?: (field: string) => boolean
    invalidFieldMessage?: string,
    inputType?: string,
    successMessage?: string,
    fieldKey: string,
} = {
    pageTitle: 'Editando',
    backPath: '/',
    onSave: async () => {},
    initialValue: '',
    fieldLabel: '',
    fieldMaxLength: undefined,
    isValidCheck: (field) => true,
    invalidFieldMessage: '',
    inputType: 'text',
    successMessage: undefined,
    fieldKey: 'field',
}

const context: {
    formData: typeof formData,
    setFormData: (newFormData: typeof formData) => void,
    invalidFormData: typeof invalidFormData,
    loadingsData: typeof loadings,
    submitted: boolean,
    save: () => Promise<void>,
    clearForm: () => void,
    call: (data: typeof fieldContext) => void,
    quit: () => void,
    fieldContext: typeof fieldContext
} = {
    formData,
    setFormData: (newFormData: typeof formData) => undefined,
    invalidFormData,
    loadingsData: loadings,
    submitted: false,
    save: async () => undefined,
    clearForm: () => undefined,
    call: (data) => undefined,
    quit: () => undefined,
    fieldContext,
}

export default { formData, invalidFormData, context, loadings, fieldContext }
