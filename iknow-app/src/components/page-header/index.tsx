import './style.scss'

import React from 'react'
import { PageTitle } from '../index'
import IComponentProps from './interfaces/i-component-props'

const PageHeader: React.FC<IComponentProps> = ({ style = {}, title, backPath }) => (
    <header className="page-header-container" style={style}>
        <div className="page-header-content-container">
            <div className="page-header-back-handler-container">{backPath ? 'a' : ''}</div>
            <div className="page-header-title-container"><PageTitle title={title} /></div>
        </div>
    </header>
)

PageHeader.defaultProps = { style: {}, title: 'Página', backPath: undefined }

export default PageHeader
