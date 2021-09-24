import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useApp } from '../../../providers/app'
import { useMissions } from '../../../providers/missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MissionView: React.FC<IComponentProps> = () => {
    const missionsProvider = useMissions()

    useEffect(missionsProvider.clear, [])

    return (
        !missionsProvider.loadingsData.searching ? (
            <div className="mission-view-page">
                <pageParts.Data />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MissionView.defaultProps = {
}

export default MissionView
