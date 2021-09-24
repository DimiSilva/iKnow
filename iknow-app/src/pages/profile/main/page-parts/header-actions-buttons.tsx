import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()

    return (
        <div className="profile-page-header-actions-buttons-container">
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Chat" />
            </div>
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Vincular" />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
