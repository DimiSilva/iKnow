import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useMissions } from '../../../providers/missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Missions: React.FC<IComponentProps> = () => {
    const missionsProvider = useMissions()

    useEffect(() => {
        missionsProvider.getMissions()
        return missionsProvider.clearMissions
    }, [])

    return (
        <div className="missions-page">
            <pageParts.HeaderActionsButtons />
            <pageParts.MissionsList />
        </div>
    )
}

Missions.defaultProps = {
}

export default Missions
