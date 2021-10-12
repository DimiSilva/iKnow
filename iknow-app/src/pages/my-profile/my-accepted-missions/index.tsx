import React, { useEffect } from 'react'
import { MissionsList } from '../../../components'
import { useMyAcceptedMissions } from '../../../providers/my-accepted-missions'
import { useProfile } from '../../../providers/profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyAcceptedMissions: React.FC<IComponentProps> = () => {
    const myAcceptedMissionsContext = useMyAcceptedMissions()
    const profileContext = useProfile()

    useEffect(() => {
        myAcceptedMissionsContext.getMissions()
        return myAcceptedMissionsContext.clear
    }, [])

    return (
        <div className="my-accepted-missions-page">
            <pageParts.HeaderActionsButtons />
            <MissionsList
                missions={myAcceptedMissionsContext.missions}
                onAuthorClick={profileContext.call}
                onScrollEnd={myAcceptedMissionsContext.getNextPage}
                view={myAcceptedMissionsContext.view}
                loading={myAcceptedMissionsContext.loadingsData.searching}
            />
        </div>
    )
}

MyAcceptedMissions.defaultProps = {}

export default MyAcceptedMissions
