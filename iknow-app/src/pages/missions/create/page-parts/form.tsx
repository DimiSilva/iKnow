import { missionCategoriesEnum, missionCategoriesMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown, TextArea } from '../../../../components'

import { useMissions } from '../../../../providers/missions'

const WhoIAm: React.FC = () => {
    const missionsProvider = useMissions()
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="missions-create-page-form">
            <div className="missions-create-page-form-row">
                <div className="missions-create-page-form-row-input-container">
                    <Input
                        onChange={(value) => missionsProvider.setCreateFormData({ ...missionsProvider.createFormData, title: value })}
                        value={missionsProvider.createFormData.title || ''}
                        type="text"
                        label="Título"
                        maxLength={100}
                        invalidDataMessage={missionsProvider.createSubmitted ? missionsProvider.invalidCreateFormData.title : undefined}
                    />
                </div>
                <div className="missions-create-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => missionsProvider.setCreateFormData({ ...missionsProvider.createFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={missionsProvider.createFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                        invalidDataMessage={missionsProvider.createSubmitted ? missionsProvider.invalidCreateFormData.category : undefined}
                    />
                </div>
            </div>
            <div className="missions-create-page-form-row">
                <div className="missions-create-page-form-row-input-container">
                    <TextArea
                        onChange={(value) => missionsProvider.setCreateFormData({ ...missionsProvider.createFormData, description: value })}
                        value={missionsProvider.createFormData.description || ''}
                        label="Descrição"
                        maxLength={1000}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
