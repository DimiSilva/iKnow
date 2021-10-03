import React from 'react'
import { ProfileData } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'
import { useProfile } from '../../../../providers/profile'

const WhatDoIDo: React.FC = () => {
    const profileProvider = useProfile()

    return (
        <ProfileData
            title="O Que eu Faço"
            content={profileProvider.profileData.whatDoIDo}
            emptyContentMessage="O usuário não contou nada sobre o que faz"
            info={`\
            Nessa sessão está descrito o que o usuário faz`}
        />
    )
}

export default WhatDoIDo
