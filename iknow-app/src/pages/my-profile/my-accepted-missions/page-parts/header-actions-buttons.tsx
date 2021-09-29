import React, { useEffect } from 'react'
import { Button, Icons } from '../../../../components'
import { useApp } from '../../../../providers/app'
import variables from '../../../../theme/variables'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()

    return (
        <div className="my-accepted-missions-page-header-actions-buttons-container">
            <div className="my-accepted-missions-page-header-actions-buttons-container-button-container" />
            <div className="my-accepted-missions-page-header-actions-buttons-container-button-container">
                <button
                    onClick={() => appProvider.navigateTo('/meu-perfil/missoes-aceitas/filtros', true)}
                    className="my-accepted-missions-page-header-actions-buttons-container-button-container-filter-button"
                    type="button"
                >
                    <Icons.Filter
                        color={variables.iconsColor}
                    />
                </button>
            </div>
        </div>
    )
}

export default HeaderActionsButtons
