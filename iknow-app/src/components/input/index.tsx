import './style.scss'

import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'

const Input: React.FC<IComponentProps> = ({ label, maxLength, onChange, value, type, invalidDataMessage }) => {
    const [remainingCharacters, setRemainingCharacter] = useState(maxLength || '')

    return (
        <div className={invalidDataMessage ? 'input-container-with-error' : 'input-container'}>
            <div className="input-header-container">
                <div className="input-header-label-container">
                    <p>
                        {label}
                    </p>
                    {invalidDataMessage
                        ? (
                            <>
                                <div className="input-header-label-icon-container" data-tip data-for={`input-error-message-${label}`}>
                                    <Icons.Info
                                        width="13px"
                                        height="13px"
                                        color="#cc0000"
                                    />
                                </div>
                                <ReactTooltip id={`input-error-message-${label}`} type="error">
                                    {invalidDataMessage}
                                </ReactTooltip>
                            </>
                        ) : ''}

                </div>
                <p>
                    {remainingCharacters}
                </p>

            </div>
            <input
                maxLength={maxLength}
                value={value}
                onChange={(e) => {
                    if (maxLength !== undefined)
                        setRemainingCharacter(maxLength - String(e.target.value).length)

                    onChange(e.target.value)
                }}
                type={type}
            />
        </div>
    )
}

Input.defaultProps = { maxLength: undefined, label: 'Label', type: 'text', invalidDataMessage: undefined }

export default Input
