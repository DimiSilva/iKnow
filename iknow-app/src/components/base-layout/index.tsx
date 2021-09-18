import './style.scss'

import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link
                            className={appProvider.currentPathName === '/meu-perfil' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            to="/meu-perfil"
                        >
                            <Icons.Person />
                        </Link>
                        <Link
                            className={appProvider.currentPathName === '/missoes' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            to="/missoes"
                        >
                            <Icons.Book />
                        </Link>
                        <Link
                            className={appProvider.currentPathName === '/rede' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            to="/rede"
                        >
                            <Icons.World />
                        </Link>
                        <Link
                            className={appProvider.currentPathName === '/chat' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            to="/chat"
                        >
                            <Icons.Chat />
                        </Link>
                        <Link
                            className={appProvider.currentPathName === '/busca' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            to="/busca"
                        >
                            <Icons.PersonSearch />
                        </Link>
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
