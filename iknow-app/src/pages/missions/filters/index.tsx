import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useApp } from '../../../providers/app'
import { useMissions } from '../../../providers/missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MissionsFilters: React.FC<IComponentProps> = () => {
    const missionsContext = useMissions()
    const appContext = useApp()

    return (
        !missionsContext.loadingsData.searching ? (
            <div className="missions-filters-page">
                <pageParts.Form />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MissionsFilters.defaultProps = {
}

export default MissionsFilters
