import React, { useEffect } from 'react'
import { MissionsList } from '../../../components'
import { useMissions } from '../../../providers/missions'
import { useProfile } from '../../../providers/profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Missions: React.FC<IComponentProps> = () => {
    const missionsProvider = useMissions()
    const profileProvider = useProfile()

    useEffect(() => {
        missionsProvider.getMissions()
        return missionsProvider.clear
    }, [])

    return (
        <div className="missions-page">
            <pageParts.HeaderActionsButtons />
            <MissionsList
                missions={missionsProvider.missions}
                onAuthorClick={profileProvider.call}
                onScrollEnd={missionsProvider.getNextPage}
                view={missionsProvider.view}
                loading={missionsProvider.loadingsData.searching}
            />
        </div>
    )
}

Missions.defaultProps = {}

export default Missions
