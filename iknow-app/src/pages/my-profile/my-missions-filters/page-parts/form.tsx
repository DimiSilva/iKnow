import { missionCategoriesEnum, missionCategoriesMasksEnum, missionStatusEnum, missionStatusMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown } from '../../../../components'

import { useMyMissions } from '../../../../providers/my-missions'

const WhoIAm: React.FC = () => {
    const myMissionsProvider = useMyMissions()
    const [statusInputValue, setStatusInputValue] = useState('')
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="my-missions-filters-page-form">
            <div className="my-missions-filters-page-form-row">
                <div className="my-missions-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => myMissionsProvider.setFiltersFormData({ ...myMissionsProvider.filtersFormData, search: value })}
                        value={myMissionsProvider.filtersFormData.search || ''}
                        type="text"
                        label="Busca"
                        maxLength={100}
                    />
                </div>
            </div>
            <div className="my-missions-filters-page-form-row">
                <div className="my-missions-filters-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => myMissionsProvider.setFiltersFormData({ ...myMissionsProvider.filtersFormData, status: value })}
                        options={Object.values(missionStatusEnum).map((type) => ({ label: missionStatusMasksEnum[type], value: type }))}
                        label="Status"
                        value={myMissionsProvider.filtersFormData.status || ''}
                        inputValue={statusInputValue}
                        onInputChange={setStatusInputValue}
                    />
                </div>
                <div className="my-missions-filters-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => myMissionsProvider.setFiltersFormData({ ...myMissionsProvider.filtersFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={myMissionsProvider.filtersFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
