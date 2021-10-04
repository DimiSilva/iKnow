import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useChat } from '../../../../providers/chat'
import { useProfile } from '../../../../providers/profile'

const HeaderActionsButtons: React.FC = () => {
    const chatProvider = useChat()
    const profileProvider = useProfile()

    return (
        <div className="profile-page-header-actions-buttons-container">
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button onClick={() => chatProvider.call(profileProvider.profileData.id)} text="Chat" />
            </div>
            <div className="profile-page-header-actions-buttons-container-button-container">
                <Button
                    onClick={profileProvider.profileData.isConnected
                        ? profileProvider.removeContact
                        : profileProvider.addContact}
                    text={profileProvider.profileData.isConnected ? 'Desconectar' : 'Conectar'}
                    disabled={profileProvider.loadingsData.addingContact || profileProvider.loadingsData.removingContact}
                />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
