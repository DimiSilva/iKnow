import './style.scss'

import React from 'react'
import { ClockLoader } from 'react-spinners'
import IComponentProps from './interfaces/i-component-props'
import variables from '../../theme/variables'

const Button: React.FC<IComponentProps> = () => (
    <div className="page-loading">
        <ClockLoader color={variables.quaternaryColor} size="50px" speedMultiplier={1} />
    </div>
)

Button.defaultProps = {}

export default Button
