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
            scrollToBottomOnUpdate
            inverse
        >
            {messages.length > 0 ? messages
                .sort((a, b) => {
                    if (new Date(a.createdAt) > new Date(b.createdAt)) return 1
                    if (new Date(a.createdAt) < new Date(b.createdAt)) return -1
                    return 0
                })
                .map((message, messageIndex) => (
                    <div key={messageIndex} className={`messages-list-message-container ${message.fromLoggedUser ? 'inverse' : ''}`}>
                        <div className="messages-list-message-container-internal">
                            {messageIndex > 0 && message.from.id === messages[messageIndex - 1].from.id
                                ? ''
                                : <p className="messages-list-message-container-internal-label">{message.from.name}</p>}

                            <p className="messages-list-message-container-internal-text">{message.text}</p>
                            <p className="messages-list-message-container-internal-date">
                                {new Date(message.createdAt).toLocaleString()}
                            </p>
                        </div>
                    </div>
                )) : undefined}
        </InfiniteScroll>
    </div>
)

MessagesList.defaultProps = { onScrollEnd: () => {}, loading: false }

export default MessagesList
