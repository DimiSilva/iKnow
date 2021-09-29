import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'
import { LinkButton } from '../index'

const LabelText: React.FC<IComponentProps> = ({ label, text, onTextClick }) => (
    <div className="label-text">
        <div className="label-text-label-container">
            <h3>{label}</h3>
        </div>
        <div className="label-text-text-container">
            { onTextClick ? <LinkButton style={{ fontSize: '16px' }} text={text} onClick={onTextClick} /> : <p>{text}</p>}
        </div>
    </div>
)

LabelText.defaultProps = { onTextClick: undefined }

export default LabelText
