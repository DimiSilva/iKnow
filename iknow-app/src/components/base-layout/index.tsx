import './style.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Icons } from '../index'

import IComponentProps from './interfaces/i-component-props'
import { useApp } from '../../providers/app'

const BaseLayout: React.FC<IComponentProps> = ({ children, active }) => {
    const { currentPageTitle, currentPathName } = useApp()

    return (
        active
            ? (
                <div className="base-layout-container">
                    <div className="base-layout-content-container">
                        <PageHeader title={currentPageTitle} />
                        {children}
                    </div>
                    <div className="base-layout-tabs-container">
                        <Link className={currentPathName === '/perfil' ? 'base-layout-tab-active' : 'base-layout-tab'} to="/perfil">
                            <Icons.Person />
                        </Link>
                        <Link className={currentPathName === '/missoes' ? 'base-layout-tab-active' : 'base-layout-tab'} to="/missoes">
                            <Icons.Book />
                        </Link>
                        <Link className={currentPathName === '/rede' ? 'base-layout-tab-active' : 'base-layout-tab'} to="/rede">
                            <Icons.World />
                        </Link>
                        <Link className={currentPathName === '/chat' ? 'base-layout-tab-active' : 'base-layout-tab'} to="/chat">
                            <Icons.Chat />
                        </Link>
                        <Link className={currentPathName === '/busca' ? 'base-layout-tab-active' : 'base-layout-tab'} to="/busca">
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
