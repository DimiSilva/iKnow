import React from 'react'
import { ProfileData } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const MyInterests: React.FC = () => {
    const fieldEditingContext = useFieldEditing()
    const myProfileContext = useMyProfile()

    return (
        <ProfileData
            title="Meus Interesses"
            content={myProfileContext.myProfileData.myInterests}
            emptyContentMessage="Edite essa sessão para contar seus interesses"
            info={`\
Nessa sessão você pode falar sobre tudo que almeja`}
            onClickEdit={() => fieldEditingContext.call({
                backPath: '/meu-perfil',
                fieldLabel: 'Meus Interesses',
                fieldKey: 'myInterests',
                onSave: myProfileContext.updateData,
                pageTitle: 'Editando Perfil',
                fieldMaxLength: 1000,
                initialValue: myProfileContext.myProfileData.myInterests,
                inputType: 'textArea',
            })}
        />
    )
}

export default MyInterests
