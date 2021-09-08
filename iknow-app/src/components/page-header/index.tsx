import './style.scss'

import React from 'react'
import { PageTitle } from '../index'

const PageHeader = ({ style = {}, title, backPath }: {style?: React.CSSProperties, title?: String, backPath?: String}) => (
    <header className="header-container" style={style}>
        <div className="header-content-container">
            <div className="back-handler-container">{backPath ? 'a' : ''}</div>
            <div className="title-container"><PageTitle title={title} /></div>
        </div>
    </header>
)

PageHeader.defaultProps = { style: {}, title: 'Página', backPath: undefined }

export default PageHeader
