import './style.scss'

import React from 'react'
import { PageHeader, Icons } from '../index'

import IComponentProps from './interfaces/i-component-props'
import { useApp } from '../../providers/app'
import variables from '../../theme/variables'

const BaseLayout: React.FC<IComponentProps> = ({ children, active }) => {
    const appContext = useApp()

    return (
        active
            ? (
                <div className="base-layout">
                    <div className="base-layout-main">
                        <div className="base-layout-main-header-container">
                            <PageHeader title={appContext.currentPageTitle} backPath={appContext.backPath} />
                        </div>
                        <div className="base-layout-main-content">{children}</div>
                    </div>
                    <div className="base-layout-tabs">
                        <button
                            className={appContext.currentPathName === '/meu-perfil' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appContext.navigateTo('/meu-perfil')}
                        >
                            <Icons.Person color={variables.iconsColor} />
                        </button>
                        <button
                            className={appContext.currentPathName === '/missoes' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appContext.navigateTo('/missoes')}
                        >
                            <Icons.Book color={variables.iconsColor} />
                        </button>
                        <button
                            className={appContext.currentPathName === '/rede' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appContext.navigateTo('/rede')}
                        >
                            <Icons.World color={variables.iconsColor} />
                        </button>
                        <button
                            className={appContext.currentPathName === '/buscar-contatos' ? 'base-layout-tabs-tab-active' : 'base-layout-tabs-tab'}
                            type="button"
                            onClick={() => appContext.navigateTo('/buscar-contatos')}
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
