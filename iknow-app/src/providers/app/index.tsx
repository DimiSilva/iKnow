import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import enums from '../../enums'
import { loggedPages, loginPages } from '../../router/pages'
import { useAuth } from '../auth'
import dataModels from './data-models'

const AppContext = createContext(dataModels.context)

export const AppProvider: React.FC = ({ children }) => {
    const historyContext = useHistory()
    const locationContext = useLocation()
    const authContext = useAuth()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [currentPageTitle, setCurrentPageTitle] = useState('')
    const [currentPathName, setCurrentPathName] = useState('')
    const [backPath, setBackPath] = useState<string | undefined>(undefined)

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(() => {
        const pageTitle: string = enums.pagesNames[locationContext.pathname] || ''
        setCurrentPageTitle(pageTitle)
        setCurrentPathName(locationContext.pathname)
    }, [])

    useEffect(() => {
        if (authContext.tokenLoaded) {
            const routes = authContext.token ? loggedPages : loginPages
            const route: any = routes.find((route) => route.path === locationContext.pathname)
            if (!route) navigateTo(routes[0].path)
        }
    }, [locationContext.pathname])

    const navigateTo = (path: string, shouldSetBackPath?: boolean) => {
        historyContext.push(path)
        if (shouldSetBackPath) setBackPath(locationContext.pathname)
        else setBackPath(undefined)
        const routes = authContext.token ? loggedPages : loginPages
        const pageTitle: string = (routes.find((route) => route.path === path) || { pageTitle: '' }).pageTitle
        setCurrentPageTitle(pageTitle)
        setCurrentPathName(path)
    }

    return (
        <AppContext.Provider value={{
            navigateTo,
            currentPageTitle,
            currentPathName,
            setCurrentPageTitle,
            backPath,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)
