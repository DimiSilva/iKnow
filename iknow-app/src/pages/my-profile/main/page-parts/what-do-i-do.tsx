import React from 'react'
import { Collapse, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const WhatDoIDo: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <div className="profile-page-collapse-container">
            <Collapse
                title="O Que eu Faço"
                info={`\
                Aqui você pode contar para as pessoas todas as suas habilidades`}
                emptyContentMessage="Edite essa sessão para contar o que você faz"
                action={{
                    icon: Icons.Edit,
                    onClick: () => fieldEditingProvider.call({
                        backPath: '/meu-perfil',
                        fieldLabel: 'O Que eu Faço',
                        fieldKey: 'whatDoIDo',
                        onSave: myProfileProvider.updateData,
                        pageTitle: 'Editando Perfil',
                        fieldMaxLength: 1000,
                        initialValue: myProfileProvider.myProfileData.whatDoIDo,
                        inputType: 'textArea',
                    }),
                }}
            >
                <div className="profile-page-collapse-container-content">{myProfileProvider.myProfileData.whatDoIDo}</div>
            </Collapse>
        </div>
    )
}

export default WhatDoIDo
