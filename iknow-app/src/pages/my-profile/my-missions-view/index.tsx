import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useMyMissions } from '../../../providers/my-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissionView: React.FC<IComponentProps> = () => {
    const myMissionsContext = useMyMissions()

    useEffect(myMissionsContext.clear, [])

    return (
        !myMissionsContext.loadingsData.searching ? (
            <div className="my-mission-view-page">
                <pageParts.Data />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MyMissionView.defaultProps = {}

export default MyMissionView
