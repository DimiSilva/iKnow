import React from 'react'
import { PageLoading } from '../../../components'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'
import { useNetwork } from '../../../providers/network'

const MissionsFilters: React.FC<IComponentProps> = () => {
    const networkProvider = useNetwork()

    return (
        !networkProvider.loadingsData.searching ? (
            <div className="network-filters-page">
                <pageParts.Form />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MissionsFilters.defaultProps = {
}

export default MissionsFilters
