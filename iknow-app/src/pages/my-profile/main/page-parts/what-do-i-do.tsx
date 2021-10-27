import React from 'react'
import { ProfileData } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const WhatDoIDo: React.FC = () => {
    const fieldEditingContext = useFieldEditing()
    const myProfileContext = useMyProfile()

    return (
        <ProfileData
            title="O Que eu Faço"
            content={myProfileContext.myProfileData.whatDoIDo}
            emptyContentMessage="Edite essa sessão para contar o que você faz"
            info={`\
Aqui você pode contar para as pessoas todas as suas habilidades`}
            onClickEdit={() => fieldEditingContext.call({
                backPath: '/meu-perfil',
                fieldLabel: 'O Que eu Faço',
                fieldKey: 'whatDoIDo',
                onSave: myProfileContext.updateData,
                pageTitle: 'Editando Perfil',
                fieldMaxLength: 1000,
                initialValue: myProfileContext.myProfileData.whatDoIDo,
                inputType: 'textArea',
            })}
        />
    )
}

export default WhatDoIDo
