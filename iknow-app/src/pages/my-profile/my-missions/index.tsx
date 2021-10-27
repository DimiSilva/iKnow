import React, { useEffect } from 'react'
import { MissionsList } from '../../../components'
import { useApp } from '../../../providers/app'
import { useMyMissions } from '../../../providers/my-missions'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyMissions: React.FC<IComponentProps> = () => {
    const myMissionsContext = useMyMissions()
    const appContext = useApp()

    useEffect(() => {
        myMissionsContext.getMissions()
        return myMissionsContext.clear
    }, [])

    return (
        <div className="my-missions-page">
            <pageParts.HeaderActionsButtons />
            <MissionsList
                missions={myMissionsContext.missions}
                onAuthorClick={() => appContext.navigateTo('/meu-perfil')}
                onScrollEnd={myMissionsContext.getNextPage}
                view={myMissionsContext.view}
                loading={myMissionsContext.loadingsData.searching}
            />
        </div>
    )
}

MyMissions.defaultProps = {}

export default MyMissions
