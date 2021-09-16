import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import dataModels from './data-models'

const AuthContext = createContext(dataModels.context)

export const AuthProvider: React.FC = ({ children }) => {
    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [token, setToken] = useState('')
    const [tokenLoaded, setTokenLoaded] = useState(false)

    useEffect(() => {
        setAlreadyRanOnce(true)
    }, [])

    useEffect(() => {
        const LSToken = localStorage.getItem('token')
        if (LSToken) setToken(LSToken)
        setTokenLoaded(true)
    }, [])

    useEffect(() => {
        if (alreadyRanOnce) localStorage.setItem('token', token)
    }, [token])

    return (
        <AuthContext.Provider value={{ token, setToken, tokenLoaded }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
