import React from 'react'
import { ProfileData } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const WhatDoIDo: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <ProfileData
            title="O Que eu Faço"
            content={myProfileProvider.myProfileData.whatDoIDo}
            emptyContentMessage="Edite essa sessão para contar o que você faz"
            info={`\
Aqui você pode contar para as pessoas todas as suas habilidades`}
            onClickEdit={() => fieldEditingProvider.call({
                backPath: '/meu-perfil',
                fieldLabel: 'O Que eu Faço',
                fieldKey: 'whatDoIDo',
                onSave: myProfileProvider.updateData,
                pageTitle: 'Editando Perfil',
                fieldMaxLength: 1000,
                initialValue: myProfileProvider.myProfileData.whatDoIDo,
                inputType: 'textArea',
            })}
        />
    )
}

export default WhatDoIDo
