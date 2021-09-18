import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import services from '../../services'
import { useAuth } from '../auth'
import dataValidators from './data-validators'

const LoginContext = createContext(dataModels.context)

export const LoginProvider: React.FC = ({ children }) => {
    const { setToken } = useAuth()
    const { addToast } = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [formData, setFormData] = useState(dataModels.formData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [submitted, setSubmitted] = useState(false)
    const [invalidFormData, setInvalidFormData] = useState(dataModels.invalidFormData)

    useEffect(() => { setAlreadyRanOnce(true) }, [])
    useEffect(dataValidators.all({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: true }), [])
    useEffect(dataValidators.email({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: alreadyRanOnce }), [formData.email])
    useEffect(dataValidators.password({ formData, invalidFormData, setInvalidFormData, shouldRunValidation: alreadyRanOnce }), [formData.password])

    const login = async () => {
        setSubmitted(true)
        if (Object.values(invalidFormData).some((message) => message !== undefined)) return
        setLoadingsData({ ...loadingsData, submitting: true })
        const res = await services.users.login(formData, addToast)
        if (res) setToken(res.token)
        setLoadingsData({ ...loadingsData, submitting: false })
    }

    const clearForm = () => {
        setFormData(dataModels.formData)
        setSubmitted(false)
    }

    return (
        <LoginContext.Provider value={{ formData, setFormData, invalidFormData, loadingsData, submitted, login, clearForm }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)
