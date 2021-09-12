import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'

const PageTitle: React.FC<IComponentProps> = ({ title }) => (
    <div className="page-title-container">
        <div className="page-title-text-container">
            <h1>{title}</h1>
        </div>
        <div className="page-title-decoration-container">
            <div className="page-title-line-container">
                <div className="page-title-line-1" />
            </div>
            <div className="page-title-line-container">
                <div className="page-title-line-2" />
            </div>
            <div className="page-title-line-container">
                <div className="page-title-line-3" />
            </div>
        </div>
    </div>
)

PageTitle.defaultProps = { title: 'Página' }

export default PageTitle
