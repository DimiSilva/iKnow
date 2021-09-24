import React, { useEffect } from 'react'
import { Button, Icons } from '../../../../components'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()

    return (
        <div className="my-missions-page-header-actions-buttons-container">
            <div className="my-missions-page-header-actions-buttons-container-button-container">
                <Button onClick={() => appProvider.navigateTo('/meu-perfil/missoes/cadastro')} text="Criar missão" />
            </div>
            <div className="my-missions-page-header-actions-buttons-container-button-container">
                <button
                    onClick={() => appProvider.navigateTo('/meu-perfil/missoes/filtros')}
                    className="my-missions-page-header-actions-buttons-container-button-container-filter-button"
                    type="button"
                >
                    <Icons.Filter />
                </button>
            </div>
        </div>
    )
}

export default HeaderActionsButtons
