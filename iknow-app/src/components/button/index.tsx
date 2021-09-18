import './style.scss'

import React from 'react'
import { ClockLoader } from 'react-spinners'
import IComponentProps from './interfaces/i-component-props'
import variables from '../../theme/variables'

const Button: React.FC<IComponentProps> = ({ text, onClick, style, loading }) => (
    <button type="button" onClick={onClick} className="button" style={style} disabled={loading}>
        {loading ? <ClockLoader color={variables.quaternaryColor} size="18px" /> : text}
    </button>
)

Button.defaultProps = { text: 'Botão', style: {}, loading: false }

export default Button
