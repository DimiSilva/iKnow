import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()

    return (
        <div className="my-profile-page-header-actions-buttons-container">
            <div className="my-profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => appProvider.navigateTo('/meu-perfil/missoes', true)} text="Minhas Missões" />
            </div>
            <div className="my-profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} disabled text="Missões em Andamento" />
            </div>
            <div className="my-profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} disabled text="Histórico de Missões" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
