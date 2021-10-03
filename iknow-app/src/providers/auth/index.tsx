/* eslint-disable no-undef */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import services from '../../services'
import dataModels from './data-models'

const AuthContext = createContext(dataModels.context)

export const AuthProvider: React.FC = ({ children }) => {
    const toastProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [token, setToken] = useState('')
    const [tokenLoaded, setTokenLoaded] = useState(false)
    const [loginSignalInterval, setLoginSignalInterval] = useState<NodeJS.Timeout>()

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(() => {
        const LSToken = localStorage.getItem('token')
        if (LSToken) setToken(LSToken)
        setTokenLoaded(true)
    }, [])

    useEffect(() => {
        if (alreadyRanOnce) {
            localStorage.setItem('token', token)
            if (!loginSignalInterval) setLoginSignalInterval(setInterval(() => services.users.loginSignal(token, toastProvider.addToast), 120000))
            else if (!token) clearInterval(loginSignalInterval)
        }
    }, [token])

    const logout = () => {
        setToken('')
    }

    return (
        <AuthContext.Provider value={{ token, setToken, tokenLoaded, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
