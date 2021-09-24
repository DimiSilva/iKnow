import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useMissions } from '../../../providers/missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MissionsCreate: React.FC<IComponentProps> = () => {
    const missionsProvider = useMissions()

    useEffect(missionsProvider.clear, [])

    return (
        !missionsProvider.loadingsData.searching ? (
            <div className="missions-create-page">
                <pageParts.Form />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MissionsCreate.defaultProps = {
}

export default MissionsCreate
