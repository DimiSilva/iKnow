import { RegisterPage, LoginPage, ProfilePage } from '../pages'

interface page { path: string, exact: boolean, component: React.FC<any>, pageTitle: string }

const loginPages: Array<page> = [
    { path: '/login', exact: true, component: LoginPage, pageTitle: 'Login' },
    { path: '/cadastro', exact: true, component: RegisterPage, pageTitle: 'Cadastro' },
]

const loggedPages: Array<page> = [
    { path: '/perfil', exact: true, component: ProfilePage, pageTitle: 'Perfil' },
]

export { loginPages, loggedPages }
