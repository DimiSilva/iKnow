import React from 'react'
import { ProfileData } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const MyInterests: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <ProfileData
            title="Meus Interesses"
            content={myProfileProvider.myProfileData.myInterests}
            emptyContentMessage="Edite essa sessão para contar seus interesses"
            info={`\
Nessa sessão você pode falar sobre tudo que almeja`}
            onClickEdit={() => fieldEditingProvider.call({
                backPath: '/meu-perfil',
                fieldLabel: 'Meus Interesses',
                fieldKey: 'myInterests',
                onSave: myProfileProvider.updateData,
                pageTitle: 'Editando Perfil',
                fieldMaxLength: 1000,
                initialValue: myProfileProvider.myProfileData.myInterests,
                inputType: 'textArea',
            })}
        />
    )
}

export default MyInterests
