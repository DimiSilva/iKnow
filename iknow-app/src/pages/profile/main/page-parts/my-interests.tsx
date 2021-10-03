import React from 'react'
import { ProfileData } from '../../../../components'
import { useProfile } from '../../../../providers/profile'

const MyInterests: React.FC = () => {
    const profileProvider = useProfile()

    return (
        <ProfileData
            title="Meus Interesses"
            content={profileProvider.profileData.myInterests}
            emptyContentMessage="O usuário não possúi nenhum interesse"
            info={`\
Nessa sessão estão descritos os interesses`}
        />
    )
}

export default MyInterests
