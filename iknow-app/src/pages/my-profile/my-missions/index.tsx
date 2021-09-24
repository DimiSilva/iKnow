import React, { useEffect } from 'react'
import { useMyMissions } from '../../../providers/my-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissions: React.FC<IComponentProps> = () => {
    const myMissionsProvider = useMyMissions()

    useEffect(() => {
        myMissionsProvider.getMissions()
        return myMissionsProvider.clearMissions
    }, [])

    return (
        <div className="my-missions-page">
            <pageParts.HeaderActionsButtons />
            <pageParts.MissionsList />
        </div>
    )
}

MyMissions.defaultProps = {
}

export default MyMissions
