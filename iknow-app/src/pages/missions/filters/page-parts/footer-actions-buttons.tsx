import React from 'react'
import { Button, Icons } from '../../../../components'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()

    return (
        <div className="missions-filters-page-footer-actions-buttons">
            <div className="missions-filters-page-footer-actions-buttons-button-container">
                <Button onClick={() => appProvider.navigateTo('/missoes')} text="Filtrar" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
