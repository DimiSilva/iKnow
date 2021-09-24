import React from 'react'
import { Collapse, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'
import { useProfile } from '../../../../providers/profile'

const WhatDoIDo: React.FC = () => {
    const profileProvider = useProfile()

    return (
        <div className="profile-page-collapse-container">
            <Collapse
                title="O Que eu Faço"
                info={`\
Nessa sessão está descrito o que o usuário faz`}
                emptyContentMessage="O usuário não contou nada sobre o que faz"
            >
                <div className="profile-page-collapse-container-content">{profileProvider.profileData.whatDoIDo}</div>
            </Collapse>
        </div>
    )
}

export default WhatDoIDo
