import React from 'react'
import { Collapse } from '../../../../components'
import { useProfile } from '../../../../providers/profile'

const WhoIAm: React.FC = () => {
    const profileProvider = useProfile()

    return (
        <div className="profile-page-collapse-container">
            <Collapse
                title="Quem eu Sou"
                info={`\
Nessa sessão está descrito o quem o usuário é`}
                emptyContentMessage="O usuário não contou nada sobre quem é"
            >
                <div className="profile-page-collapse-container-content">{profileProvider.profileData.whoIAm}</div>
            </Collapse>
        </div>
    )
}

export default WhoIAm
