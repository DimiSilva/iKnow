import Pages from '../pages'

interface page { path: string, exact: boolean, component: React.FC<any>, pageTitle: string }

const loginPages: Array<page> = [
    { path: '/login', exact: true, component: Pages.Login.Main, pageTitle: 'Login' },
    { path: '/cadastro', exact: true, component: Pages.Register.Main, pageTitle: 'Cadastro' },
]

const loggedPages: Array<page> = [
    { path: '/meu-perfil', exact: true, component: Pages.MyProfile.Main, pageTitle: 'Perfil' },
    { path: '/editando', exact: true, component: Pages.Common.FieldEditing, pageTitle: 'Editando' },
]

export { loginPages, loggedPages }
