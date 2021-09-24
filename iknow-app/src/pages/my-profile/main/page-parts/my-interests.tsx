import React from 'react'
import { Collapse, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const MyInterests: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <div className="my-profile-page-collapse-container">
            <Collapse
                title="Meus Interesses"
                info={`\
                Nessa sessão você pode falar sobre tudo que almeja`}
                emptyContentMessage="Edite essa sessão para contar seus interesses"
                action={{
                    icon: Icons.Edit,
                    onClick: () => fieldEditingProvider.call({
                        backPath: '/meu-perfil',
                        fieldLabel: 'Meus Interesses',
                        fieldKey: 'myInterests',
                        onSave: myProfileProvider.updateData,
                        pageTitle: 'Editando Perfil',
                        fieldMaxLength: 1000,
                        initialValue: myProfileProvider.myProfileData.myInterests,
                        inputType: 'textArea',
                    }),
                }}
            >
                <div className="my-profile-page-collapse-container-content">{myProfileProvider.myProfileData.myInterests}</div>
            </Collapse>
        </div>
    )
}

export default MyInterests
