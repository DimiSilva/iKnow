import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import dataModels from './data-models'

const AppContext = createContext(dataModels.context)

export const AppProvider: React.FC = ({ children }) => {
    const history = useHistory()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)

    useEffect(() => {
        setAlreadyRanOnce(true)
    }, [])

    const navigateTo = (path: string) => history.push(path)

    return (
        <AppContext.Provider value={{ navigateTo }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)
