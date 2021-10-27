import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { io, Socket } from 'socket.io-client'
import enums from '../../enums'
import { loggedPages, loginPages } from '../../router/pages'
import { useAuth } from '../auth'
import dataModels from './data-models'

const SocketContext = createContext(dataModels.context)

export const SocketProvider: React.FC = ({ children }) => {
    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [socket, setSocket] = useState<Socket | undefined>()

    useEffect(() => { setAlreadyRanOnce(true) }, [])

    useEffect(() => (socket ? socket.disconnect : () => {}), [])

    const connectToSocket = (userId: string) => {
        const socket = io(process.env.REACT_APP_BASE_API_URL || '', {
            auth: {
                userId,
            },
        })

        setSocket(socket)
    }

    return (
        <SocketContext.Provider value={{
            connectToSocket,
            socket,
        }}
        >
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => useContext(SocketContext)
