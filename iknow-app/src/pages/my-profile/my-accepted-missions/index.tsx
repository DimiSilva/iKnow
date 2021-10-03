import React, { useEffect } from 'react'
import { MissionsList } from '../../../components'
import { useApp } from '../../../providers/app'
import { useMyAcceptedMissions } from '../../../providers/my-accepted-missions'
import { useProfile } from '../../../providers/profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyAcceptedMissions: React.FC<IComponentProps> = () => {
    const myAcceptedMissionsProvider = useMyAcceptedMissions()
    const appProvider = useApp()
    const profileProvider = useProfile()

    useEffect(() => {
        myAcceptedMissionsProvider.getMissions()
        return myAcceptedMissionsProvider.clear
    }, [])

    return (
        <div className="my-accepted-missions-page">
            <pageParts.HeaderActionsButtons />
            <MissionsList
                missions={myAcceptedMissionsProvider.missions}
                onAuthorClick={profileProvider.call}
                onScrollEnd={myAcceptedMissionsProvider.getNextPage}
                view={myAcceptedMissionsProvider.view}
                loading={myAcceptedMissionsProvider.loadingsData.searching}
            />
        </div>
    )
}

MyAcceptedMissions.defaultProps = {}

export default MyAcceptedMissions
