import React from 'react'
import { Icons } from '../../../../components'
import { useApp } from '../../../../providers/app'
import variables from '../../../../theme/variables'

const HeaderActionsButtons: React.FC = () => {
    const appContext = useApp()

    return (
        <div className="network-page-header-actions-buttons-container">
            <div className="network-page-header-actions-buttons-container-button-container" />
            <div className="network-page-header-actions-buttons-container-button-container">
                <button
                    onClick={() => appContext.navigateTo('/rede/filtros', true)}
                    className="network-page-header-actions-buttons-container-button-container-filter-button"
                    type="button"
                >
                    <Icons.Filter
                        color={variables.iconsColor}
                    />
                </button>
            </div>
        </div>
    )
}

export default HeaderActionsButtons
