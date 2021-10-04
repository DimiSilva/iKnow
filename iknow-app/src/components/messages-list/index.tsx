import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'
import { InfiniteScroll, LabelText } from '../index'

const MessagesList: React.FC<IComponentProps> = ({ onScrollEnd, loading, messages }) => (
    <div className="messages-list">
        <InfiniteScroll
            onScrollEnd={onScrollEnd}
            emptyMessage="Nenhuma mensagem..."
            loading={loading}
        >
            {messages.length > 0 ? messages
                .sort((a, b) => {
                    if (new Date(a.createdAt) > new Date(b.createdAt)) return 1
                    if (new Date(a.createdAt) < new Date(b.createdAt)) return -1
                    return 0
                })
                .map((message, messageIndex) => (
                    <div key={messageIndex} className="messages-list-message-container">
                        {
                            messageIndex > 0 && message.from.id === messages[messageIndex - 1].from.id
                                ? <p className={`messages-list-message-container-text ${message.fromLoggedUser ? 'inverse' : ''}`}>{message.text}</p>
                                : <LabelText inverse={message.fromLoggedUser} label={message.from.name} text={message.text} />
                        }
                    </div>
                )) : undefined}
        </InfiniteScroll>
    </div>
)

MessagesList.defaultProps = { onScrollEnd: () => {}, loading: false }

export default MessagesList
