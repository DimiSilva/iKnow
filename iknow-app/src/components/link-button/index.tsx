import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'

const LinkButton: React.FC<IComponentProps> = ({ text, onClick, style }) => (
    <button type="button" onClick={onClick} className="link-button" style={style}>
        {text}
    </button>
)

LinkButton.defaultProps = { text: 'Botão', style: {} }

export default LinkButton
