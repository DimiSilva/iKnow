import Pages from '../pages'

interface page { path: string, exact: boolean, component: React.FC<any>, pageTitle: string }

const loginPages: Array<page> = [
    { path: '/login', exact: true, component: Pages.Login.Main, pageTitle: 'Login' },
    { path: '/cadastro', exact: true, component: Pages.Register.Main, pageTitle: 'Cadastro' },
]

const loggedPages: Array<page> = [
    { path: '/meu-perfil', exact: true, component: Pages.MyProfile.Main, pageTitle: 'Perfil' },
    { path: '/meu-perfil/missoes', exact: true, component: Pages.MyProfile.MyMissions, pageTitle: 'Minhas Missões' },
    { path: '/meu-perfil/missoes/filtros', exact: true, component: Pages.MyProfile.MyMissionsFilters, pageTitle: 'Filtrar Missões' },
    { path: '/meu-perfil/missoes/cadastro', exact: true, component: Pages.MyProfile.MyMissionsCreate, pageTitle: 'Criar Missão' },
    { path: '/meu-perfil/missoes/visualizacao', exact: true, component: Pages.MyProfile.MyMissionsView, pageTitle: 'Missão' },
    { path: '/meu-perfil/missoes/completar', exact: true, component: Pages.MyProfile.MyMissionsComplete, pageTitle: 'Completar Missão' },
    { path: '/meu-perfil/missoes-aceitas', exact: true, component: Pages.MyProfile.MyAcceptedMissions, pageTitle: 'Missões Aceitas' },
    { path: '/meu-perfil/missoes-aceitas/filtros', exact: true, component: Pages.MyProfile.MyAcceptedMissionsFilters, pageTitle: 'Filtrar Missões' },
    { path: '/meu-perfil/missoes-aceitas/visualizacao', exact: true, component: Pages.MyProfile.MyAcceptedMissionsView, pageTitle: 'Missão' },
    { path: '/missoes', exact: true, component: Pages.Missions.Main, pageTitle: 'Missões' },
    { path: '/missoes/filtros', exact: true, component: Pages.Missions.Filters, pageTitle: 'Filtrar Missões' },
    { path: '/missoes/cadastro', exact: true, component: Pages.Missions.Create, pageTitle: 'Criar Missão' },
    { path: '/missoes/visualizacao', exact: true, component: Pages.Missions.View, pageTitle: 'Missão' },
    { path: '/rede', exact: true, component: Pages.Network.Main, pageTitle: 'Rede' },
    { path: '/rede/filtros', exact: true, component: Pages.Network.Filters, pageTitle: 'Filtrar Usuários' },
    { path: '/buscar-contatos', exact: true, component: Pages.SearchContacts.Main, pageTitle: 'Buscar Usuário' },
    { path: '/buscar-contatos/filtros', exact: true, component: Pages.SearchContacts.Filters, pageTitle: 'Filtrar Usuários' },
    { path: '/perfil', exact: true, component: Pages.Profile.Main, pageTitle: 'Perfil' },
    { path: '/editando', exact: true, component: Pages.Common.FieldEditing, pageTitle: 'Editando' },
]

export { loginPages, loggedPages }
