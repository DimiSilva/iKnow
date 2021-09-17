import { emailValidate } from 'iknow-common/utils'
import IDataValidatorParams from './interfaces/i-data-validator-params'

const all: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        const updatedInvalidData = { ...invalidFormData }

        if (!formData.name) updatedInvalidData.name = 'É necessário preencher o nome'
        else updatedInvalidData.name = undefined

        if (!emailValidate(formData.email)) updatedInvalidData.email = 'E-mail inválido'
        else updatedInvalidData.email = undefined

        if (formData.phone.length !== 11) updatedInvalidData.phone = 'Telefone inválido'
        else updatedInvalidData.phone = undefined

        if (formData.password.length < 6) updatedInvalidData.password = 'A senha precisa ter 6 ou mais caracteres'
        else updatedInvalidData.password = undefined

        setInvalidFormData(updatedInvalidData)
    }
}

const name: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        if (!formData.name) setInvalidFormData({ ...invalidFormData, name: 'É necessário preencher o nome' })
        else setInvalidFormData({ ...invalidFormData, name: undefined })
    }
}

const email: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        if (!emailValidate(formData.email)) setInvalidFormData({ ...invalidFormData, email: 'E-mail inválido' })
        else setInvalidFormData({ ...invalidFormData, email: undefined })
    }
}

const phone: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        if (formData.phone.length !== 11) setInvalidFormData({ ...invalidFormData, phone: 'Telefone inválido' })
        else setInvalidFormData({ ...invalidFormData, phone: undefined })
    }
}

const password: ((formData: IDataValidatorParams) => () => void) = ({ formData, invalidFormData, setInvalidFormData, shouldRunValidation }) => () => {
    if (shouldRunValidation) {
        if (formData.password.length < 6) setInvalidFormData({ ...invalidFormData, password: 'A senha precisa ter 6 ou mais caracteres' })
        else setInvalidFormData({ ...invalidFormData, password: undefined })
    }
}

export default { all, name, email, phone, password }
