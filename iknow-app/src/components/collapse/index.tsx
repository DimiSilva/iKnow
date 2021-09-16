import './style.scss'

import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'

const Button: React.FC<IComponentProps> = ({ children, title, style, info, action }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="collapse" style={style}>
            <div className="collapse-header">
                <div className="collapse-header-title-container">
                    {title}
                    {info ? (
                        <>
                            <div className="collapse-header-info-container" data-tip data-for={`input-error-message-${title}`}>
                                <Icons.Info height="20px" width="20px" />
                            </div>
                            <ReactTooltip id={`input-error-message-${title}`} type="info">
                                {info}
                            </ReactTooltip>
                        </>
                    ) : undefined}
                </div>
                <div className="collapse-header-action-button-container">
                    {action ? (
                        <button type="button" onClick={action.onClick}>
                            <action.icon height="20px" width="20px" />
                        </button>
                    ) : undefined}
                </div>
            </div>
            <div className={open ? 'collapse-content-open' : 'collapse-content-closed'}>
                {children}
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

Button.defaultProps = { title: '', style: {}, info: undefined, action: undefined }

export default Button
