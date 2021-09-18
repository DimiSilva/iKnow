import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import enums from '../../enums'
import dataModels from './data-models'

const AppContext = createContext(dataModels.context)

export const AppProvider: React.FC = ({ children }) => {
    const historyProvider = useHistory()
    const locationProvider = useLocation()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [currentPageTitle, setCurrentPageTitle] = useState('')
    const [currentPathName, setCurrentPathName] = useState('')
    const [backPath, setBackPath] = useState<string | undefined>(undefined)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(() => {
        const pageTitle: string = enums.pagesNames[locationProvider.pathname] || ''
        setCurrentPageTitle(pageTitle)
        setCurrentPathName(locationProvider.pathname)
        setBackPath(undefined)
    }, [locationProvider.pathname])

    const navigateTo = (path: string) => historyProvider.push(path)

    return (
        <AppContext.Provider value={{ navigateTo,
            currentPageTitle,
            currentPathName,
            setCurrentPageTitle,
            backPath,
            setBackPath: (backPath) => setBackPath(backPath),
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)
