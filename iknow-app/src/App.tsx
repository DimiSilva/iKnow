import { ToastProvider } from 'react-toast-notifications'
import Router from './router'

import './app.scss'
import { AuthProvider } from './providers/auth'

const App = () => (
    <div className="app">
        <ToastProvider placement="top-center">
            <AuthProvider>
                <Router />
            </AuthProvider>
        </ToastProvider>
    </div>
)

export default App
