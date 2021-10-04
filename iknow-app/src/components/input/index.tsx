import './style.scss'

import React, { useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'
import variables from '../../theme/variables'

const Input: React.FC<IComponentProps> = ({ label, maxLength, onChange, value, type, invalidDataMessage }) => {
    const [remainingCharacters, setRemainingCharacter] = useState(maxLength || '')

    useEffect(() => {
        if (maxLength !== undefined)
            setRemainingCharacter(maxLength - String(value).length)
    }, [value])

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
                                        color={variables.errorColor}
                                    />
                                </div>
                                <ReactTooltip multiline className="tooltip error" id={`input-error-message-${label}`}>
                                    <p className="text">{invalidDataMessage}</p>
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
                onChange={(e) => onChange(e.target.value)}
                type={type}
            />
        </div>
    )
}

Input.defaultProps = { maxLength: undefined, label: 'Label', type: 'text', invalidDataMessage: undefined }

export default Input
