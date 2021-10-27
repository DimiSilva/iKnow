import { ToastProvider } from 'react-toast-notifications'
import Router from './router'

import './app.scss'
import { AuthProvider } from './providers/auth'
import { SocketProvider } from './providers/socket'

const App = () => (
    <div className="app">
        <ToastProvider placement="top-center">
            <SocketProvider>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </SocketProvider>
        </ToastProvider>
    </div>
)

export default App
