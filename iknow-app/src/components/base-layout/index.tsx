import './style.scss'

import React from 'react'
import { PageHeader, Icons } from '../index'

import IComponentProps from './interfaces/i-component-props'
import { useApp } from '../../providers/app'
import variables from '../../theme/variables'

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
                            <Icons.Person color={variables.iconsColor} />
                        </button>
                        <button
                            className={appProvider.currentPathName === '/missoes' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/missoes')}
                        >
                            <Icons.Book color={variables.iconsColor} />
                        </button>
                        <button
                            className={appProvider.currentPathName === '/rede' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/rede')}
                        >
                            <Icons.World color={variables.iconsColor} />
                        </button>
                        <button
                            className={appProvider.currentPathName === '/buscar-contatos' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appProvider.navigateTo('/buscar-contatos')}
                        >
                            <Icons.PersonSearch color={variables.iconsColor} />
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
