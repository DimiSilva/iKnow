import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useChat } from '../../../../providers/chat'
import { useProfile } from '../../../../providers/profile'

const HeaderActionsButtons: React.FC = () => {
    const chatContext = useChat()
    const profileContext = useProfile()

    return (
        <div className="profile-page-header-actions-buttons-container">
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => chatContext.call(profileContext.profileData.id)} text="Chat" />
            </div>
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button
                    onClick={profileContext.profileData.isConnected
                        ? profileContext.removeContact
                        : profileContext.addContact}
                    text={profileContext.profileData.isConnected ? 'Desconectar' : 'Conectar'}
                    disabled={profileContext.loadingsData.addingContact || profileContext.loadingsData.removingContact}
                />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
