import './style.scss'

import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'
import variables from '../../theme/variables'

const TextArea: React.FC<IComponentProps> = ({ label, maxLength, onChange, value, invalidDataMessage }) => {
    const [remainingCharacters, setRemainingCharacter] = useState(maxLength || '')

    return (
        <div className={invalidDataMessage ? 'text-area-with-error' : 'text-area'}>
            <div className="text-area-header">
                <div className="text-area-header-label">
                    <p>
                        {label}
                    </p>
                    {invalidDataMessage
                        ? (
                            <>
                                <div className="text-area-header-label-icon" data-tip data-for={`text-area-error-message-${label}`}>
                                    <Icons.Info
                                        size="13px"
                                        color={variables.errorColor}
                                    />
                                </div>
                                <ReactTooltip multiline className="tooltip error" id={`text-area-error-message-${label}`}>
                                    <p className="text">{invalidDataMessage}</p>
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
