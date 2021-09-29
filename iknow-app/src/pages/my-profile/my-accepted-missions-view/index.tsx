import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useMyAcceptedMissions } from '../../../providers/my-accepted-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissionView: React.FC<IComponentProps> = () => {
    const myAcceptedMissionsProvider = useMyAcceptedMissions()

    useEffect(myAcceptedMissionsProvider.clear, [])

    return (
        !myAcceptedMissionsProvider.loadingsData.searching ? (
            <div className="my-accepted-mission-view-page">
                <pageParts.Data />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MyMissionView.defaultProps = {}

export default MyMissionView
