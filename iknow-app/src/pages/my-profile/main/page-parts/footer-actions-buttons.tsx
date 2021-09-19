import React from 'react'
import { Button } from '../../../../components'
import { useAuth } from '../../../../providers/auth'

const FooterActionsButtons: React.FC = () => {
    const authProvider = useAuth()

    return (
        <div className="profile-page-footer-actions-buttons-container">
            <div className="profile-page-footer-actions-buttons-container-button-container">
                <Button onClick={authProvider.logout} text="Sair" />
            </div>
        </div>
    )
}

export default FooterActionsButtons
