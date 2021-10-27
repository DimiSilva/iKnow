import IDataValidatorParams from './interfaces/i-data-validator-params'

const createAll: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        const updatedInvalidData = { ...invalidFormData }

        if (!formData.title) updatedInvalidData.title = 'É necessário preencher o título'
        else updatedInvalidData.title = undefined

        if (!formData.category) updatedInvalidData.category = 'É necessário selecionar uma categoria'
        else updatedInvalidData.category = undefined

        setInvalidFormData(updatedInvalidData)
    }
}

const createTitle: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        if (!formData.title) setInvalidFormData({ ...invalidFormData, title: 'É necessário preencher o nome' })
        else setInvalidFormData({ ...invalidFormData, title: undefined })
    }
}

const createCategory: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        if (!formData.category) setInvalidFormData({ ...invalidFormData, category: 'E-mail inválido' })
        else setInvalidFormData({ ...invalidFormData, category: undefined })
    }
}

export default { createAll, createTitle, createCategory }
