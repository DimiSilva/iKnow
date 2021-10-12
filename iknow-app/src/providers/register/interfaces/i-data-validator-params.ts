import dataModels from '../data-models'

interface IDataValidatorParams {
    formData: typeof dataModels.formData,
    invalidFormData: typeof dataModels.invalidFormData,
    setInvalidFormData: React.Dispatch<React.SetStateAction<typeof dataModels.invalidFormData>>,
    shouldRunValidation: boolean
}

export default IDataValidatorParams
