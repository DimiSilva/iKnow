import React, { useEffect } from 'react'
import { MessagesList } from '../../../components'
import { useChat } from '../../../providers/chat'
import { useApp } from '../../../providers/app'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Network: React.FC<IComponentProps> = () => {
    const chatContext = useChat()
    const appContext = useApp()

    useEffect(() => chatContext.clear,
        [])

    return (
        <div className="chat-page">
            <MessagesList
                messages={chatContext.messages}
                onScrollEnd={chatContext.getNextPage}
                loading={chatContext.loadingsData.searching}
            />
            <pageParts.MessageInput />
        </div>
    )
}

Network.defaultProps = {}

export default Network
