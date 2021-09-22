import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useMissions } from '../../../../providers/missions'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()
    const missionsProvider = useMissions()

    return (
        <div className="missions-filters-page-footer-actions-buttons">
            <div className="missions-filters-page-footer-actions-buttons-button-container">
                <Button
                    onClick={() => {
                        missionsProvider.clearFiltersForm()
                        appProvider.navigateTo('/missoes')
                    }}
                    text="Limpar"
                />
            </div>
            <div className="missions-filters-page-footer-actions-buttons-button-container">
                <Button onClick={() => appProvider.navigateTo('/missoes')} text="Filtrar" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
