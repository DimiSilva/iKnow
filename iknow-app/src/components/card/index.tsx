import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'

const Card: React.FC<IComponentProps> = ({ children, style = {} }) => (
    <div className="card" style={style}>
        {children}
    </div>
)

Card.defaultProps = { style: {} }

export default Card
