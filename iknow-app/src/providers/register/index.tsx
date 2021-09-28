import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { emailValidate } from 'iknow-common/utils'
import dataModels from './data-models'
import services from '../../services'
import { useApp } from '../app'
import dataValidators from './data-validators'

const RegisterContext = createContext(dataModels.context)

export const RegisterProvider: React.FC = ({ children }) => {
    const { addToast } = useToasts()
    const { navigateTo } = useApp()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [formData, setFormData] = useState(dataModels.formData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [submitted, setSubmitted] = useState(false)
    const [invalidFormData, setInvalidFormData] = useState(dataModels.invalidFormData)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(dataValidators.all({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: true }), [])
    useEffect(dataValidators.name({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: alreadyRanOnce }), [formData.name])
    useEffect(dataValidators.email({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: alreadyRanOnce }), [formData.email])
    useEffect(dataValidators.phone({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: alreadyRanOnce }), [formData.phone])
    useEffect(dataValidators.password({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: alreadyRanOnce }), [formData.password])

    const register = async () => {
        setSubmitted(true)
        if (Object.values(invalidFormData).some((message) => message !== undefined)) return
        setLoadingsData((loadingsData) => ({ ...loadingsData, submitting: true }))
        const res = await services.users.register(formData, addToast)
        if (res) {
            addToast('Cadastro realizado com sucesso', { appearance: 'success', autoDismiss: true })
            navigateTo('/login')
        }
        setLoadingsData((loadingsData) => ({ ...loadingsData, submitting: false }))
    }

    const clearForm = () => {
        setFormData(dataModels.formData)
        setSubmitted(false)
    }

    return (
        <RegisterContext.Provider value={{ formData, setFormData, invalidFormData, loadingsData, submitted, register, clearForm }}>
            {children}
        </RegisterContext.Provider>
    )
}

export const useRegister = () => useContext(RegisterContext)
