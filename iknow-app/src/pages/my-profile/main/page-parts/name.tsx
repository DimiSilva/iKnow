import React from 'react'
import { Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'
import variables from '../../../../theme/variables'

const Name: React.FC = () => {
    const fieldEditingContext = useFieldEditing()
    const myProfileContext = useMyProfile()

    return (
        <div className="my-profile-page-name-container">
            <div className="my-profile-page-name-container-text-container"><h1>{myProfileContext.myProfileData.name}</h1></div>
            <div className="my-profile-page-name-container-action-container">
                <button
                    type="button"
                    onClick={() => fieldEditingContext.call({
                        backPath: '/meu-perfil',
                        fieldLabel: 'Nome',
                        fieldKey: 'name',
                        isValidCheck: (name) => !!name,
                        onSave: myProfileContext.updateData,
                        pageTitle: 'Editando Perfil',
                        fieldMaxLength: 100,
                        initialValue: myProfileContext.myProfileData.name,
                        invalidFieldMessage: 'É necessário preencher o nome',
                    })}
                >
                    <Icons.Edit
                        size="24px"
                        color={variables.iconsColor}
                    />
                </button>
            </div>
        </div>
    )
}

export default Name
