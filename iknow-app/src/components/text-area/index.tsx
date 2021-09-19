import './style.scss'

import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'

const TextArea: React.FC<IComponentProps> = ({ label, maxLength, onChange, value, invalidDataMessage }) => {
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
                                        size="13px"
                                        color="#cc0000"
                                    />
                                </div>
                                <ReactTooltip multiline id={`input-error-message-${label}`} type="error">
                                    {invalidDataMessage}
                                </ReactTooltip>
                            </>
                        ) : ''}

                </div>
                <p>
                    {remainingCharacters}
                </p>

            </div>
            <textarea
                maxLength={maxLength}
                value={value}
                onChange={(e) => {
                    if (maxLength !== undefined)
                        setRemainingCharacter(maxLength - String(e.target.value).length)

                    onChange(e.target.value)
                }}
            />
        </div>
    )
}

TextArea.defaultProps = { maxLength: undefined, label: 'Label', invalidDataMessage: undefined }

export default TextArea
