import React from 'react'
import { Collapse } from '../../../../components'
import { useProfile } from '../../../../providers/profile'

const MyInterests: React.FC = () => {
    const profileProvider = useProfile()

    return (
        <div className="profile-page-collapse-container">
            <Collapse
                title="Meus Interesses"
                info={`\
Nessa sessão estão descritos os interesses`}
                emptyContentMessage="O usuário não possúi nenhum interesse"
            >
                <div className="profile-page-collapse-container-content">{profileProvider.profileData.myInterests}</div>
            </Collapse>
        </div>
    )
}

export default MyInterests
