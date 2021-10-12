import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useApp } from '../../../providers/app'
import { useMyMissions } from '../../../providers/my-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissionsFilters: React.FC<IComponentProps> = () => {
    const myMissionsContext = useMyMissions()
    const appContext = useApp()

    return (
        !myMissionsContext.loadingsData.searching ? (
            <div className="my-missions-filters-page">
                <pageParts.Form />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MyMissionsFilters.defaultProps = {
}

export default MyMissionsFilters
