import React from 'react'
import { Collapse } from '../../../../components'
import { useProfile } from '../../../../providers/profile'

const Achievements: React.FC = () => {
    const profileContext = useProfile()

    return (
        <div className="profile-page-collapse-container">
            <Collapse
                title="Conquistas"
                info={`\
Nessa sessão você pode ver tudo que o usuário conquistou na sua jornada de ensino-aprendizado`}
                emptyContentMessage="O usuário ainda não possúi nenhuma conquista"
                defaultState="open"
            >
                {undefined}
            </Collapse>
        </div>
    )
}

export default Achievements
