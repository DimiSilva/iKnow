import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import enums from '../../enums'
import dataModels from './data-models'

const AppContext = createContext(dataModels.context)

export const AppProvider: React.FC = ({ children }) => {
    const history = useHistory()
    const location = useLocation()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [currentPageTitle, setCurrentPageTitle] = useState('')
    const [currentPathName, setCurrentPathName] = useState('')

    useEffect(() => {
        setAlreadyRanOnce(true)
    }, [])

    useEffect(() => {
        const pageTitle: string = enums.pagesNames[location.pathname] || ''
        setCurrentPageTitle(pageTitle)
        setCurrentPathName(location.pathname)
    }, [location.pathname])

    const navigateTo = (path: string) => history.push(path)

    return (
        <AppContext.Provider value={{ navigateTo, currentPageTitle, currentPathName }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)
