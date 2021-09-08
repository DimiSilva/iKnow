import './style.scss'

import React from 'react'

const PageTitle = ({ title }: {title?: String}) => (
    <div className="main-container">
        <div className="text-container">
            <h1>{title}</h1>
        </div>
        <div className="title-decoration-container">
            <div className="line-container">
                <div className="line-1" />
            </div>
            <div className="line-container">
                <div className="line-2" />
            </div>
            <div className="line-container">
                <div className="line-3" />
            </div>
        </div>
    </div>
)

PageTitle.defaultProps = { title: 'Página' }

export default PageTitle
