import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'
import { LinkButton } from '../index'

const LabelText: React.FC<IComponentProps> = ({ label, text, onTextClick, inverse }) => (
    <div className="label-text">
        <div className={`label-text-label-container ${inverse ? 'inverse' : ''}`}>
            <h3>{label}</h3>
        </div>
        <div className={`label-text-text-container ${inverse ? 'inverse' : ''}`}>
            { onTextClick ? <LinkButton style={{ fontSize: '16px' }} text={text} onClick={onTextClick} /> : <p>{text}</p>}
        </div>
    </div>
)

LabelText.defaultProps = { onTextClick: undefined, inverse: false }

export default LabelText
