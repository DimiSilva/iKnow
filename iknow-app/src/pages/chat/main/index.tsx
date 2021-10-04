import React, { useEffect } from 'react'
import { MessagesList } from '../../../components'
import { useChat } from '../../../providers/chat'
import { useApp } from '../../../providers/app'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Network: React.FC<IComponentProps> = () => {
    const chatProvider = useChat()
    const appProvider = useApp()

    useEffect(() => {
        ''

        //    chatProvider.getMessages()
        return chatProvider.clear
    },
    [])

    return (
        <div className="chat-page">
            <MessagesList
                messages={chatProvider.messages}
                onScrollEnd={chatProvider.getNextPage}
                loading={chatProvider.loadingsData.searching}
            />
            <pageParts.MessageInput />
        </div>
    )
}

Network.defaultProps = {}

export default Network
