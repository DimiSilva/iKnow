import React from 'react'
import { Collapse, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const Acknowledgment: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <div className="profile-page-collapse-container">
            <Collapse
                title="Reconhecimento"
                info={`\
                    Nessa sessão você pode ver o seu reconhecimento, as pessoas vão te dar reconhecimento com base nas suas ações`}
                emptyContentMessage="Nenhum reconhecimento ainda, mas não desanime, continue se esforçando"
                defaultState="open"
            >
                {undefined}
            </Collapse>
        </div>
    )
}

export default Acknowledgment
