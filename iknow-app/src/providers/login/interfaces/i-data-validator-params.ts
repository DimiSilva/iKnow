import dataModels from '../data-models'

interface IDataValidatorParams {
    formData: typeof dataModels.formData,
    invalidFormData: typeof dataModels.invalidFormData,
    setInvalidFormData: (invalidFormData: typeof dataModels.invalidFormData) => void,
    shouldRunValidation: boolean
}

export default IDataValidatorParams
