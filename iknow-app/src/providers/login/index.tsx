import React, { createContext, useContext, useEffect, useState } from 'react'
import dataModels from './data-models'
import services from '../../services'

const LoginContext = createContext(dataModels.context)

export const LoginProvider: React.FC = ({ children }) => {
    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [loginData, setLoginData] = useState(dataModels.login)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [submitted, setSubmitted] = useState(false)
    const [invalidLoginData, setInvalidLoginData] = useState(dataModels.invalidLogin)

    useEffect(() => {
        if (alreadyRanOnce) {
            if (loginData.email.length < 3 || !loginData.email.includes('@')) setInvalidLoginData({ ...invalidLoginData, email: 'E-mail inválido' })
            else setInvalidLoginData({ ...invalidLoginData, email: undefined })
        }
    }, [loginData.email])

    useEffect(() => {
        if (alreadyRanOnce) {
            if (loginData.password.length < 6) setInvalidLoginData({ ...invalidLoginData, password: 'A senha precisa ter 6 ou mais caracteres' })
            else setInvalidLoginData({ ...invalidLoginData, password: undefined })
        }
    }, [loginData.password])

    useEffect(() => {
        setAlreadyRanOnce(true)
    }, [])

    const login = async () => {
        setSubmitted(true)
        if (Object.values(invalidLoginData).some((message) => message !== undefined)) return
        setLoadingsData({ ...loadingsData, submitting: true })
        const res = await services.users.login(loginData)
        setLoadingsData({ ...loadingsData, submitting: false })
    }

    return (
        <LoginContext.Provider value={{ loginData, setLoginData, invalidLoginData, loadingsData, submitted, login }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)
