import React from 'react'
import { LinkButton } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useProfile } from '../../../../providers/profile'

const Header: React.FC = () => {
    const myMissionsContext = useMyMissions()
    const profileContext = useProfile()

    return (
        <div className="my-mission-complete-page-header">
            <p><span>Avaliar: </span></p>
            <LinkButton
                text={(myMissionsContext.missionInVisualization.acceptedBy || {}).name || ''}
                onClick={() => profileContext.call((myMissionsContext.missionInVisualization.acceptedBy || {})._id || '')}
                style={{ fontSize: '20px' }}
            />
        </div>
    )
}

export default Header
