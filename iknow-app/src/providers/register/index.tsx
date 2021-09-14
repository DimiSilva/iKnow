import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { emailValidate } from 'iknow-common/utils'
import dataModels from './data-models'
import services from '../../services'

const RegisterContext = createContext(dataModels.context)

export const RegisterProvider: React.FC = ({ children }) => {
    const { addToast } = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [registerData, setRegisterData] = useState(dataModels.register)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [submitted, setSubmitted] = useState(false)
    const [invalidRegisterData, setInvalidRegisterData] = useState(dataModels.invalidRegister)

    useEffect(() => {
        if (alreadyRanOnce) {
            if (!registerData.name) setInvalidRegisterData({ ...invalidRegisterData, name: 'É necessário preencher o nome' })
            else setInvalidRegisterData({ ...invalidRegisterData, name: undefined })
        }
    }, [registerData.name])

    useEffect(() => {
        if (alreadyRanOnce) {
            if (!emailValidate(registerData.email)) setInvalidRegisterData({ ...invalidRegisterData, email: 'E-mail inválido' })
            else setInvalidRegisterData({ ...invalidRegisterData, email: undefined })
        }
    }, [registerData.email])

    useEffect(() => {
        if (alreadyRanOnce) {
            if (registerData.phone.length !== 11) setInvalidRegisterData({ ...invalidRegisterData, phone: 'Telefone inválido' })
            else setInvalidRegisterData({ ...invalidRegisterData, phone: undefined })
        }
    }, [registerData.phone])

    useEffect(() => {
        if (alreadyRanOnce) {
            if (registerData.password.length < 6) setInvalidRegisterData({ ...invalidRegisterData, password: 'A senha precisa ter 6 ou mais caracteres' })
            else setInvalidRegisterData({ ...invalidRegisterData, password: undefined })
        }
    }, [registerData.password])

    useEffect(() => {
        setAlreadyRanOnce(true)
    }, [])

    const register = async () => {
        setSubmitted(true)
        if (Object.values(invalidRegisterData).some((message) => message !== undefined)) return
        setLoadingsData({ ...loadingsData, submitting: true })
        const res = await services.users.register(registerData, addToast)
        console.log(res)
        setLoadingsData({ ...loadingsData, submitting: false })
    }

    return (
        <RegisterContext.Provider value={{ registerData, setRegisterData, invalidRegisterData, loadingsData, submitted, register }}>
            {children}
        </RegisterContext.Provider>
    )
}

export const useRegister = () => useContext(RegisterContext)
