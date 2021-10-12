import { missionCategoriesEnum, missionCategoriesMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown, TextArea } from '../../../../components'

import { useMyMissions } from '../../../../providers/my-missions'

const WhoIAm: React.FC = () => {
    const myMissionsContext = useMyMissions()
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="my-missions-create-page-form">
            <div className="my-missions-create-page-form-row">
                <div className="my-missions-create-page-form-row-input-container">
                    <Input
                        onChange={(value) => myMissionsContext.setCreateFormData({ ...myMissionsContext.createFormData, title: value })}
                        value={myMissionsContext.createFormData.title || ''}
                        type="text"
                        label="Título"
                        maxLength={100}
                        invalidDataMessage={myMissionsContext.createSubmitted ? myMissionsContext.invalidCreateFormData.title : undefined}
                    />
                </div>
                <div className="my-missions-create-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => myMissionsContext.setCreateFormData({ ...myMissionsContext.createFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={myMissionsContext.createFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                        invalidDataMessage={myMissionsContext.createSubmitted ? myMissionsContext.invalidCreateFormData.category : undefined}
                    />
                </div>
            </div>
            <div className="my-missions-create-page-form-row">
                <div className="my-missions-create-page-form-row-input-container">
                    <TextArea
                        onChange={(value) => myMissionsContext.setCreateFormData({ ...myMissionsContext.createFormData, description: value })}
                        value={myMissionsContext.createFormData.description || ''}
                        label="Descrição"
                        maxLength={1000}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
