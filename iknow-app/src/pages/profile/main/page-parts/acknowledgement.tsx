import React from 'react'
import { Collapse } from '../../../../components'

const Acknowledgement: React.FC = () => (
    <div className="profile-page-collapse-container">
        <Collapse
            title="Reconhecimento"
            info={`\
Nessa sessão você pode ver o reconhecimento do usuário`}
            emptyContentMessage="O usuário ainda não possúi nenhum reconhecimento"
            defaultState="open"
        >
            {undefined}
        </Collapse>
    </div>
)

export default Acknowledgement
