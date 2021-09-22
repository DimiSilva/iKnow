import dataModels from '../data-models'

interface IDataValidatorParams {
    formData: typeof dataModels.createFormData,
    invalidFormData: typeof dataModels.invalidCreateFormData,
    setInvalidFormData: (invalidFormData: typeof dataModels.invalidCreateFormData) => void,
    shouldRunValidation: boolean
}

export default IDataValidatorParams
