import React from 'react'
import { PageLoading } from '../../../components'
import { useMyAcceptedMissions } from '../../../providers/my-accepted-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissionsFilters: React.FC<IComponentProps> = () => {
    const myAcceptedMissionsProvider = useMyAcceptedMissions()

    return (
        !myAcceptedMissionsProvider.loadingsData.searching ? (
            <div className="my-accepted-missions-filters-page">
                <pageParts.Form />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MyMissionsFilters.defaultProps = {
}

export default MyMissionsFilters
