import './style.scss'

import React from 'react'
import { PacmanLoader } from 'react-spinners'
import IComponentProps from './interfaces/i-component-props'

const Button: React.FC<IComponentProps> = ({ text, onClick, style, loading }) => (
    <button type="button" onClick={onClick} className="button" style={style} disabled={loading}>
        {loading ? <PacmanLoader color="#ee5622" size="6px" /> : text}
    </button>
)

Button.defaultProps = { text: 'Botão', style: {}, loading: false }

export default Button
