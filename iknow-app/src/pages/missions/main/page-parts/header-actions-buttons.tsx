import React from 'react'
import { Button, Icons } from '../../../../components'
import { useApp } from '../../../../providers/app'
import variables from '../../../../theme/variables'

const HeaderActionsButtons: React.FC = () => {
    const appContext = useApp()

    return (
        <div className="missions-page-header-actions-buttons-container">
            <div className="missions-page-header-actions-buttons-container-button-container">
                <Button onClick={() => appContext.navigateTo('/missoes/cadastro', true)} text="Criar missão" />
            </div>
            <div className="missions-page-header-actions-buttons-container-button-container">
                <button
                    onClick={() => appContext.navigateTo('/missoes/filtros', true)}
                    className="missions-page-header-actions-buttons-container-button-container-filter-button"
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
