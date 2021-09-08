import {
    IonRouterOutlet,
} from '@ionic/react'

import { IonReactRouter } from '@ionic/react-router'

import { Route } from 'react-router-dom'
import Login from './pages/login'
import { BaseLayout } from './components'

const loginPages = [
    { path: '/login', exact: true, component: <Login /> },
]

const loggedPages = [

]

const Router = () => {
    const logged = false
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                {!logged ? (
                    <IonRouterOutlet>
                        {loginPages.map((page) => (
                            <Route exact path="/login">
                                <Login />
                            </Route>
                        )) }
                    </IonRouterOutlet>
                )
                    : (
                        <BaseLayout>
                            <IonRouterOutlet>
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                            </IonRouterOutlet>
                        </BaseLayout>
                    )}
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default Router
