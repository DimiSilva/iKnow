import React from 'react'
import { ProfileData } from '../../../../components'
import { useProfile } from '../../../../providers/profile'

const WhoIAm: React.FC = () => {
    const profileContext = useProfile()

    return (
        <ProfileData
            title="Quem eu Sou"
            content={profileContext.profileData.whoIAm}
            emptyContentMessage="O usuário não contou nada sobre quem é"
            info={`\
            Nessa sessão está descrito o quem o usuário é`}
        />
    )
}

export default WhoIAm
