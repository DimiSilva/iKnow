import React from 'react'
import { Collapse, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const WhoIAm: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <div className="my-profile-page-collapse-container">
            <Collapse
                title="Quem eu Sou"
                info={`\
                    Use essa sessão para se descrever, sinta-se à vontade para contar para as pessoas tudo que você achar relevante`}
                emptyContentMessage="Edite essa sessão para contar quem você é"
                action={{
                    icon: Icons.Edit,
                    onClick: () => fieldEditingProvider.call({
                        backPath: '/meu-perfil',
                        fieldLabel: 'Quem eu Sou',
                        fieldKey: 'whoIAm',
                        onSave: myProfileProvider.updateData,
                        pageTitle: 'Editando Perfil',
                        fieldMaxLength: 1000,
                        initialValue: myProfileProvider.myProfileData.whoIAm,
                        inputType: 'textArea',
                    }),
                }}
            >
                <div className="my-profile-page-collapse-container-content">{myProfileProvider.myProfileData.whoIAm}</div>
            </Collapse>
        </div>
    )
}

export default WhoIAm
