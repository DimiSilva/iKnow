import {
    IonRouterOutlet,
} from '@ionic/react'

import { IonReactRouter } from '@ionic/react-router'

import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import Login from './pages/login'
import { BaseLayout } from './components'

interface page { path: string, exact: boolean, component: React.FC<any>, pageTitle: string }

const loginPages: Array<page> = [
    { path: '/login', exact: true, component: Login, pageTitle: 'Login' },
]

const loggedPages: Array<page> = [

]

const Router: React.FC = () => {
    const logged = false
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                {!logged ? (
                    <IonRouterOutlet>
                        {loginPages.map((page) => (
                            <Route exact path={page.path}>
                                <page.component
                                    pageTitle={page.pageTitle}
                                />
                            </Route>
                        ))}
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
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
