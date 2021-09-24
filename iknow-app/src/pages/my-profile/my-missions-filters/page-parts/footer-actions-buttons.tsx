import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useMyMissions } from '../../../../providers/my-missions'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()
    const myMissionsProvider = useMyMissions()

    return (
        <div className="my-missions-filters-page-footer-actions-buttons">
            <div className="my-missions-filters-page-footer-actions-buttons-button-container">
                <Button
                    onClick={() => {
                        myMissionsProvider.clearFiltersForm()
                        appProvider.navigateTo('/meu-perfil/missoes')
                    }}
                    text="Limpar"
                />
            </div>
            <div className="my-missions-filters-page-footer-actions-buttons-button-container">
                <Button onClick={() => appProvider.navigateTo('/meu-perfil/missoes')} text="Filtrar" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
