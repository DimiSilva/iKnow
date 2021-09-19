import React from 'react'
import { Collapse } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'

const Achievements: React.FC = () => {
    const myProfileProvider = useMyProfile()

    return (
        <div className="profile-page-collapse-container">
            <Collapse
                title="Conquistas"
                info={`\
Nessa sessão você pode ver tudo que você conquistou na sua jornada de ensino-aprendizado`}
                emptyContentMessage="Nenhuma conquista ainda, mas não desanime, continue se esforçando"
                defaultState="open"
            >
                {undefined}
            </Collapse>
        </div>
    )
}

export default Achievements
