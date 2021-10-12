import React from 'react'
import { ProfileData } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const WhoIAm: React.FC = () => {
    const fieldEditingContext = useFieldEditing()
    const myProfileContext = useMyProfile()

    return (
        <ProfileData
            title="Quem eu Sou"
            content={myProfileContext.myProfileData.whoIAm}
            emptyContentMessage="Edite essa sessão para contar quem você é"
            info={`\
    Use essa sessão para se descrever, sinta-se à vontade para contar para as pessoas tudo que você achar relevante`}
            onClickEdit={() => fieldEditingContext.call({
                backPath: '/meu-perfil',
                fieldLabel: 'Quem eu Sou',
                fieldKey: 'whoIAm',
                onSave: myProfileContext.updateData,
                pageTitle: 'Editando Perfil',
                fieldMaxLength: 1000,
                initialValue: myProfileContext.myProfileData.whoIAm,
                inputType: 'textArea',
            })}
        />
    )
}

export default WhoIAm
