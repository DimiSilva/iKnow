import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useNetwork } from '../../../../providers/network'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()
    const networkProvider = useNetwork()

    return (
        <div className="network-filters-page-footer-actions-buttons">
            <div className="network-filters-page-footer-actions-buttons-button-container">
                <Button
                    onClick={() => {
                        networkProvider.clearFiltersForm()
                        appProvider.navigateTo('/rede')
                    }}
                    text="Limpar"
                />
            </div>
            <div className="network-filters-page-footer-actions-buttons-button-container">
                <Button onClick={() => appProvider.navigateTo('/rede')} text="Filtrar" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
