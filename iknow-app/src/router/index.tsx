import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { BaseLayout } from '../components'
import Providers from '../providers'
import { useAuth } from '../providers/auth'
import constructRoutes from './construct-routes'

const Router: React.FC = () => {
    const { token, tokenLoaded } = useAuth()

    if (!tokenLoaded) return <></>

    const routes = constructRoutes(token)

    return (
        <BrowserRouter>
            <Providers>
                <BaseLayout active={!!token}>
                    {routes}
                </BaseLayout>
            </Providers>
        </BrowserRouter>
    )
}

export default Router
