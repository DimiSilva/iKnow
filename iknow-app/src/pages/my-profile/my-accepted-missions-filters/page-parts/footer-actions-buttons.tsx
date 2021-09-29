import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useMyAcceptedMissions } from '../../../../providers/my-accepted-missions'

const HeaderActionsButtons: React.FC = () => {
    const myAcceptedMissionsProvider = useMyAcceptedMissions()
    const appProvider = useApp()

    return (
        <div className="my-accepted-missions-filters-page-footer-actions-buttons">
            <div className="my-accepted-missions-filters-page-footer-actions-buttons-button-container">
                <Button
                    onClick={() => {
                        myAcceptedMissionsProvider.clearFiltersForm()
                        appProvider.navigateTo('/meu-perfil/missoes-aceitas')
                    }}
                    text="Limpar"
                />
            </div>
            <div className="my-accepted-missions-filters-page-footer-actions-buttons-button-container">
                <Button onClick={() => appProvider.navigateTo('/meu-perfil/missoes-aceitas')} text="Filtrar" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
