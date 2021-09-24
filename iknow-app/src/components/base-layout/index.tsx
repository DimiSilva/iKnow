import './style.scss'

import React from 'react'
import { PageHeader, Icons } from '../index'

import IComponentProps from './interfaces/i-component-props'
import { useApp } from '../../providers/app'

const BaseLayout: React.FC<IComponentProps> = ({ children, active }) => {
    const appProvider = useApp()

    return (
        active
            ? (
                <div className="base-layout">
                    <div className="base-layout-main">
                        <div className="base-layout-main-header-container">
                            <PageHeader title={appProvider.currentPageTitle} backPath={appProvider.backPath} />
                        </div>
                        <div className="base-layout-main-content">{children}</div>
                    </div>
                    <div className="base-layout-tabs">
                        <button
                            className={appProvider.currentPathName === '/meu-perfil' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/meu-perfil')}
                        >
                            <Icons.Person />
                        </button>
                        <button
                            className={appProvider.currentPathName === '/missoes' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/missoes')}
                        >
                            <Icons.Book />
                        </button>
                        <button
                            className={appProvider.currentPathName === '/rede' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/rede')}
                            disabled
                        >
                            <Icons.World />
                        </button>
                        <button
                            className={appProvider.currentPathName === '/chat' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/chat')}
                            disabled
                        >
                            <Icons.Chat />
                        </button>
                        <button
                            className={appProvider.currentPathName === '/busca' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/busca')}
                            disabled
                        >
                            <Icons.PersonSearch />
                        </button>
                    </div>
                </div>
            )
            : <>{children}</>
    )
}

BaseLayout.defaultProps = {
    active: true,
}

export default BaseLayout
