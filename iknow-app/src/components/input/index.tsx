import './style.scss'

import React, { useState } from 'react'
import IComponentProps from './interfaces/i-component-props'

const Input: React.FC<IComponentProps> = ({ label, maxLength, onChange, value, type }) => {
    const [remainingCharacters, setRemainingCharacter] = useState(maxLength || '')

    return (
        <div className="input-container">
            <div className="input-header-container">
                <p>
                    {label}
                </p>
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

Input.defaultProps = { maxLength: undefined, label: 'Label', type: 'text' }

export default Input
