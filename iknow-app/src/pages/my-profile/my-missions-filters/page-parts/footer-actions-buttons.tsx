import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useMyMissions } from '../../../../providers/my-missions'

const HeaderActionsButtons: React.FC = () => {
    const appContext = useApp()
    const myMissionsContext = useMyMissions()

    return (
        <div className="my-missions-filters-page-footer-actions-buttons">
            <div className="my-missions-filters-page-footer-actions-buttons-button-container">
                <Button
                    onClick={() => {
                        myMissionsContext.clearFiltersForm()
                        appContext.navigateTo('/meu-perfil/missoes')
                    }}
                    text="Limpar"
                />
            </div>
            <div className="my-missions-filters-page-footer-actions-buttons-button-container">
                <Button onClick={() => appContext.navigateTo('/meu-perfil/missoes')} text="Filtrar" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
