import React from 'react'
import { Button } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'

const HeaderActionsButtons: React.FC = () => {
    const myProfileProvider = useMyProfile()

    return (
        <div className="profile-page-header-actions-buttons-container">
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Minhas Missões" />
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
