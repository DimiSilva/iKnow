import React from 'react'
import { Button, Icons, TextArea } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useChat } from '../../../../providers/chat'

const HeaderActionsButtons: React.FC = () => {
    const chatProvider = useChat()

    return (
        <div className="chat-page-message-input">
            <div className="chat-page-message-input-input-container">
                <TextArea maxLength={1000} label="Mensagem" onChange={chatProvider.setMessage} value={chatProvider.message} />
            </div>
            <div className="chat-page-message-input-button-container">
                <Button text="Enviar" onClick={chatProvider.send} disabled={!chatProvider.message} style={{ height: '100%' }} />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
