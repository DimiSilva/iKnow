import React from 'react'
import { ProfileData } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const WhoIAm: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <ProfileData
            title="Quem eu Sou"
            content={myProfileProvider.myProfileData.whoIAm}
            emptyContentMessage="Edite essa sessão para contar quem você é"
            info={`\
    Use essa sessão para se descrever, sinta-se à vontade para contar para as pessoas tudo que você achar relevante`}
            onClickEdit={() => fieldEditingProvider.call({
                backPath: '/meu-perfil',
                fieldLabel: 'Quem eu Sou',
                fieldKey: 'whoIAm',
                onSave: myProfileProvider.updateData,
                pageTitle: 'Editando Perfil',
                fieldMaxLength: 1000,
                initialValue: myProfileProvider.myProfileData.whoIAm,
                inputType: 'textArea',
            })}
        />
    )
}

export default WhoIAm
