import { missionCategoriesEnum, missionCategoriesMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown, TextArea } from '../../../../components'

import { useMissions } from '../../../../providers/missions'

const Form: React.FC = () => {
    const missionsContext = useMissions()
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="missions-create-page-form">
            <div className="missions-create-page-form-row">
                <div className="missions-create-page-form-row-input-container">
                    <Input
                        onChange={(value) => missionsContext.setCreateFormData({ ...missionsContext.createFormData, title: value })}
                        value={missionsContext.createFormData.title || ''}
                        type="text"
                        label="Título"
                        maxLength={100}
                        invalidDataMessage={missionsContext.createSubmitted ? missionsContext.invalidCreateFormData.title : undefined}
                    />
                </div>
                <div className="missions-create-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => missionsContext.setCreateFormData({ ...missionsContext.createFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={missionsContext.createFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                        invalidDataMessage={missionsContext.createSubmitted ? missionsContext.invalidCreateFormData.category : undefined}
                    />
                </div>
            </div>
            <div className="missions-create-page-form-row">
                <div className="missions-create-page-form-row-input-container">
                    <TextArea
                        onChange={(value) => missionsContext.setCreateFormData({ ...missionsContext.createFormData, description: value })}
                        value={missionsContext.createFormData.description || ''}
                        label="Descrição"
                        maxLength={1000}
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
