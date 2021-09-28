import React, { useEffect } from 'react'
import { MissionsList } from '../../../components'
import { useApp } from '../../../providers/app'
import { useMyMissions } from '../../../providers/my-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissions: React.FC<IComponentProps> = () => {
    const myMissionsProvider = useMyMissions()
    const appProvider = useApp()

    useEffect(() => {
        myMissionsProvider.getMissions()
        return myMissionsProvider.clear
    }, [])

    return (
        <div className="my-missions-page">
            <pageParts.HeaderActionsButtons />
            <MissionsList
                missions={myMissionsProvider.missions}
                onAuthorClick={() => appProvider.navigateTo('/meu-perfil')}
                onScrollEnd={myMissionsProvider.getNextPage}
                view={myMissionsProvider.view}
                loading={myMissionsProvider.loadingsData.searching}
            />
        </div>
    )
}

MyMissions.defaultProps = {}

export default MyMissions
