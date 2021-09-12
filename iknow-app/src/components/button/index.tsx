import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'

const Button: React.FC<IComponentProps> = ({ text, onClick, style }) => (
    <button type="button" onClick={onClick} className="button" style={style}>
        {text}
    </button>
)

Button.defaultProps = { text: 'Botão', style: {} }

export default Button
