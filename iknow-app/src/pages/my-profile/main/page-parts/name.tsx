import React from 'react'
import { Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'
import variables from '../../../../theme/variables'

const Name: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <div className="my-profile-page-name-container">
            <div className="my-profile-page-name-container-text-container">{myProfileProvider.myProfileData.name}</div>
            <div className="my-profile-page-name-container-action-container">
                <button
                    type="button"
                    onClick={() => fieldEditingProvider.call({
                        backPath: '/meu-perfil',
                        fieldLabel: 'Nome',
                        fieldKey: 'name',
                        isValidCheck: (name) => !!name,
                        onSave: myProfileProvider.updateData,
                        pageTitle: 'Editando Perfil',
                        fieldMaxLength: 100,
                        initialValue: myProfileProvider.myProfileData.name,
                        invalidFieldMessage: 'É necessário preencher o nome',
                    })}
                >
                    <Icons.Edit
                        size="18px"
                        color={variables.iconsColor}
                    />
                </button>
            </div>
        </div>
    )
}

export default Name
