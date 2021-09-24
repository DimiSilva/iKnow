import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()

    return (
        <div className="profile-page-header-actions-buttons-container">
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => appProvider.navigateTo('/meu-perfil/missoes')} text="Minhas Missões" />
            </div>
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Missões em Andamento" />
            </div>
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Histórico de Missões" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
