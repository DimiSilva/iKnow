import { Route, Redirect } from 'react-router-dom'

import { loggedPages, loginPages } from './pages'

const constructRoutes = (token: string) => {
    const pages = token ? loggedPages : loginPages
    const routes = pages.map((page) => (
        <Route key={page.path} exact path={page.path}>
            <page.component />
        </Route>
    ))

    routes.push(
        <Route key="*">
            <Redirect to={pages[0].path} />
        </Route>,
    )

    return routes
}

export default constructRoutes
