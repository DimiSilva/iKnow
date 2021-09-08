import './style.scss'

import React from 'react'

const Card = ({ children, style = {} }: {children: React.ReactNode, style?: React.CSSProperties}) => (
    <div className="card" style={style}>
        {children}
    </div>
)

Card.defaultProps = { style: {} }

export default Card
