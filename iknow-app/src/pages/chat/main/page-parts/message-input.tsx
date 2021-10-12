import React from 'react'
import { Button, TextArea } from '../../../../components'
import { useChat } from '../../../../providers/chat'

const HeaderActionsButtons: React.FC = () => {
    const chatContext = useChat()

    return (
        <div className="chat-page-message-input">
            <div className="chat-page-message-input-input-container">
                <TextArea
                    onEnterPress={() => {
                        if (chatContext.message) {
                            chatContext.send()
                        }
                    }}
                    maxLength={1000}
                    label="Mensagem"
                    onChange={chatContext.setMessage}
                    value={chatContext.message}
                />
            </div>
            <div className="chat-page-message-input-button-container">
                <Button text="Enviar" onClick={chatContext.send} disabled={!chatContext.message} style={{ height: '100%' }} />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
