import React, { useEffect } from 'react'
import { MissionsList } from '../../../components'
import { useMissions } from '../../../providers/missions'
import { useProfile } from '../../../providers/profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Missions: React.FC<IComponentProps> = () => {
    const missionsContext = useMissions()
    const profileContext = useProfile()

    useEffect(() => {
        missionsContext.getMissions()
        return missionsContext.clear
    }, [])

    return (
        <div className="missions-page">
            <pageParts.HeaderActionsButtons />
            <MissionsList
                missions={missionsContext.missions}
                onAuthorClick={profileContext.call}
                onScrollEnd={missionsContext.getNextPage}
                view={missionsContext.view}
                loading={missionsContext.loadingsData.searching}
            />
        </div>
    )
}

Missions.defaultProps = {}

export default Missions
