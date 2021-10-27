import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useApp } from '../../../providers/app'
import { useMissions } from '../../../providers/missions'
import { useMyMissions } from '../../../providers/my-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MissionsCreate: React.FC<IComponentProps> = () => {
    const myMissionsContext = useMyMissions()

    useEffect(myMissionsContext.clear, [])

    return (
        !myMissionsContext.loadingsData.searching ? (
            <div className="my-missions-create-page">
                <pageParts.Form />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MissionsCreate.defaultProps = {
}

export default MissionsCreate
