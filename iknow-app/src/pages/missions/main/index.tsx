import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useMissions } from '../../../providers/missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Missions: React.FC<IComponentProps> = () => {
    const missionsProvider = useMissions()

    useEffect(missionsProvider.getMissions, [])

    return (
        !missionsProvider.loadingsData.searching ? (
            <div className="missions-page">
                <pageParts.HeaderActionsButtons />
                <pageParts.MissionsList />
            </div>
        ) : <PageLoading />
    )
}

Missions.defaultProps = {
}

export default Missions
