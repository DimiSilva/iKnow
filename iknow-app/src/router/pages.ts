import Pages from '../pages'

interface page { path: string, exact: boolean, component: React.FC<any> }

const loginPages: Array<page> = [
    { path: '/login', exact: true, component: Pages.Login.Main },
    { path: '/cadastro', exact: true, component: Pages.Register.Main },
]

const loggedPages: Array<page> = [
    { path: '/editando', exact: true, component: Pages.Common.FieldEditing },
    { path: '/meu-perfil', exact: true, component: Pages.MyProfile.Main },
    { path: '/meu-perfil/missoes', exact: true, component: Pages.MyProfile.MyMissions },
    { path: '/meu-perfil/missoes/filtros', exact: true, component: Pages.MyProfile.MyMissionsFilters },
    { path: '/meu-perfil/missoes/cadastro', exact: true, component: Pages.MyProfile.MyMissionsCreate },
    { path: '/editando', exact: true, component: Pages.Common.FieldEditing },
    { path: '/missoes', exact: true, component: Pages.Missions.Main },
    { path: '/missoes/filtros', exact: true, component: Pages.Missions.Filters },
    { path: '/missoes/cadastro', exact: true, component: Pages.Missions.Create },
]

export { loginPages, loggedPages }
