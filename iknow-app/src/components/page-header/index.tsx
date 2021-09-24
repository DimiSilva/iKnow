import './style.scss'

import React from 'react'
import { Icons, PageTitle } from '../index'
import IComponentProps from './interfaces/i-component-props'
import { useApp } from '../../providers/app'
import variables from '../../theme/variables'

const PageHeader: React.FC<IComponentProps> = ({ style = {}, title, backPath }) => {
    const appProvider = useApp()

    return (
        <header className="page-header" style={style}>
            <div className="page-header-back-handler-container">
                {backPath ? (
                    <button type="button" onClick={() => appProvider.navigateTo(backPath)}>
                        <Icons.BackArrow
                            color={variables.tertiaryColor}
                            size="43"
                        />
                    </button>
                ) : ''}
            </div>
            <div className="page-header-title-container"><PageTitle title={title} /></div>
        </header>
    )
}

PageHeader.defaultProps = { style: {}, title: 'Página', backPath: undefined }

export default PageHeader
