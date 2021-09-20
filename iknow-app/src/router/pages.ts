import Pages from '../pages'

interface page { path: string, exact: boolean, component: React.FC<any> }

const loginPages: Array<page> = [
    { path: '/login', exact: true, component: Pages.Login.Main },
    { path: '/cadastro', exact: true, component: Pages.Register.Main },
]

const loggedPages: Array<page> = [
    { path: '/meu-perfil', exact: true, component: Pages.MyProfile.Main },
    { path: '/editando', exact: true, component: Pages.Common.FieldEditing },
    { path: '/missoes', exact: true, component: Pages.Missions.Main },
    { path: '/missoes/filtros', exact: true, component: Pages.Missions.Filters },
]

export { loginPages, loggedPages }
