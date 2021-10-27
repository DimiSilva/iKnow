import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const appContext = useApp()

    return (
        <div className="my-profile-page-header-actions-buttons-container">
            <div className="my-profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => appContext.navigateTo('/meu-perfil/missoes', true)} text="Minhas Missões" />
            </div>
            <div className="my-profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => appContext.navigateTo('/meu-perfil/missoes-aceitas', true)} text="Missões Aceitas" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
