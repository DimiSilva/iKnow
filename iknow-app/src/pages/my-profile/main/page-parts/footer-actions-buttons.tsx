import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useAuth } from '../../../../providers/auth'

const FooterActionsButtons: React.FC = () => {
    const authContext = useAuth()
    const appContext = useApp()

    return (
        <div className="my-profile-page-footer-actions-buttons-container">
            <div className="my-profile-page-footer-actions-buttons-container-button-container">
                <Button
                    onClick={() => {
                        authContext.logout()
                        appContext.navigateTo('/login')
                    }}
                    text="Sair"
                />
            </div>
        </div>
    )
}

export default FooterActionsButtons
