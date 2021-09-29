import React from 'react'
import { LinkButton } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useProfile } from '../../../../providers/profile'

const Header: React.FC = () => {
    const myMissionsProvider = useMyMissions()
    const profileProvider = useProfile()

    return (
        <div className="my-mission-complete-page-header">
            <span>Avaliar: </span>
            <LinkButton
                text={(myMissionsProvider.missionInVisualization.acceptedBy || {}).name || ''}
                onClick={() => profileProvider.call((myMissionsProvider.missionInVisualization.acceptedBy || {})._id || '')}
                style={{ fontSize: '20px' }}
            />
        </div>
    )
}

export default Header
