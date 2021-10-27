import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useNetwork } from '../../../../providers/network'

const HeaderActionsButtons: React.FC = () => {
    const appContext = useApp()
    const networkContext = useNetwork()

    return (
        <div className="network-filters-page-footer-actions-buttons">
            <div className="network-filters-page-footer-actions-buttons-button-container">
                <Button
                    onClick={() => {
                        networkContext.clearFiltersForm()
                        appContext.navigateTo('/rede')
                    }}
                    text="Limpar"
                />
            </div>
            <div className="network-filters-page-footer-actions-buttons-button-container">
                <Button onClick={() => appContext.navigateTo('/rede')} text="Filtrar" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
