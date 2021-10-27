import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useMyMissions } from '../../../providers/my-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissionComplete: React.FC<IComponentProps> = () => {
    const myMissionsContext = useMyMissions()

    useEffect(myMissionsContext.clear, [])

    return (
        !myMissionsContext.loadingsData.searching ? (
            <div className="my-mission-complete-page">
                <pageParts.Header />
                <pageParts.Evaluation />
                <pageParts.AcknowledgementItems />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MyMissionComplete.defaultProps = {}

export default MyMissionComplete
