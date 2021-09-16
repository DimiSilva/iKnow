import { IonApp } from '@ionic/react'

import { ToastProvider } from 'react-toast-notifications'
import Router from './router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './app.scss'
import { AuthProvider } from './providers/auth'

const App = () => (
    <IonApp className="app">
        <ToastProvider placement="top-center">
            <AuthProvider>
                <Router />
            </AuthProvider>
        </ToastProvider>
    </IonApp>
)

export default App
