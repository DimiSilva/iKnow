import './style.scss'

import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'

const Collapse: React.FC<IComponentProps> = ({ children, title, style, info, action, emptyContentMessage, defaultState }) => {
    const [open, setOpen] = useState(defaultState === 'open')
    return (
        <div className="collapse" style={style}>
            <div className="collapse-header">
                <div className="collapse-header-title-container">
                    {title}
                    {info ? (
                        <>
                            <div className="collapse-header-title-container-info-container" data-tip data-for={`input-error-message-${title}`}>
                                <Icons.Info size="20px" />
                            </div>
                            <ReactTooltip multiline id={`input-error-message-${title}`} type="info">
                                {info}
                            </ReactTooltip>
                        </>
                    ) : undefined}
                </div>
                <div className="collapse-header-action-button-container">
                    {action ? (
                        <button type="button" onClick={action.onClick}>
                            <action.icon size="20px" />
                        </button>
                    ) : undefined}
                </div>
            </div>
            <div className={open ? 'collapse-content-container-open' : 'collapse-content-container-closed'}>
                <div className="collapse-content">
                    {children || (emptyContentMessage ? <p className="collapse-content-empty-message">{emptyContentMessage}</p> : '') }
                </div>
            </div>
            <button
                type="button"
                className={open ? 'collapse-open-close-button-open' : 'collapse-open-close-button-closed'}
                onClick={() => setOpen(!open)}
            >
                <Icons.ExpandArrow />
            </button>
        </div>
    )
}

Collapse.defaultProps = { title: '',
    style: {},
    info: undefined,
    action: undefined,
    emptyContentMessage: undefined,
    defaultState: 'closed',
}

export default Collapse
