import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useAuth } from '../../../../providers/auth'

const FooterActionsButtons: React.FC = () => {
    const authProvider = useAuth()
    const appProvider = useApp()

    return (
        <div className="my-profile-page-footer-actions-buttons-container">
            <div className="my-profile-page-footer-actions-buttons-container-button-container">
                <Button
                    onClick={() => {
                        authProvider.logout()
                        appProvider.navigateTo('/login')
                    }}
                    text="Sair"
                />
            </div>
        </div>
    )
}

export default FooterActionsButtons
