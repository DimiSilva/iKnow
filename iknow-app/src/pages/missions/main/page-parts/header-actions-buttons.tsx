import React, { useEffect } from 'react'
import { Button, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()

    return (
        <div className="missions-page-header-actions-buttons-container">
            <div className="missions-page-header-actions-buttons-container-button-container">
                <Button onClick={() => appProvider.navigateTo('/missoes/cadastro', true)} text="Criar missão" />
            </div>
            <div className="missions-page-header-actions-buttons-container-button-container">
                <button
                    onClick={() => appProvider.navigateTo('/missoes/filtros', true)}
                    className="missions-page-header-actions-buttons-container-button-container-filter-button"
                    type="button"
                >
                    <Icons.Filter />
                </button>
            </div>
        </div>
    )
}

export default HeaderActionsButtons
