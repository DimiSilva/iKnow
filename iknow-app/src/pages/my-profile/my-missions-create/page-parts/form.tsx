import { missionCategoriesEnum, missionCategoriesMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown, TextArea } from '../../../../components'

import { useMyMissions } from '../../../../providers/my-missions'

const WhoIAm: React.FC = () => {
    const myMissionsProvider = useMyMissions()
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="my-missions-create-page-form">
            <div className="my-missions-create-page-form-row">
                <div className="my-missions-create-page-form-row-input-container">
                    <Input
                        onChange={(value) => myMissionsProvider.setCreateFormData({ ...myMissionsProvider.createFormData, title: value })}
                        value={myMissionsProvider.createFormData.title || ''}
                        type="text"
                        label="Título"
                        maxLength={100}
                        invalidDataMessage={myMissionsProvider.createSubmitted ? myMissionsProvider.invalidCreateFormData.title : undefined}
                    />
                </div>
                <div className="my-missions-create-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => myMissionsProvider.setCreateFormData({ ...myMissionsProvider.createFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={myMissionsProvider.createFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                        invalidDataMessage={myMissionsProvider.createSubmitted ? myMissionsProvider.invalidCreateFormData.category : undefined}
                    />
                </div>
            </div>
            <div className="my-missions-create-page-form-row">
                <div className="my-missions-create-page-form-row-input-container">
                    <TextArea
                        onChange={(value) => myMissionsProvider.setCreateFormData({ ...myMissionsProvider.createFormData, description: value })}
                        value={myMissionsProvider.createFormData.description || ''}
                        label="Descrição"
                        maxLength={1000}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
