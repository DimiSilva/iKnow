import { missionCategoriesEnum, missionCategoriesMasksEnum, missionStatusEnum, missionStatusMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown } from '../../../../components'
import { useMyAcceptedMissions } from '../../../../providers/my-accepted-missions'

const WhoIAm: React.FC = () => {
    const myAcceptedMissionsContext = useMyAcceptedMissions()
    const [statusInputValue, setStatusInputValue] = useState('')
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="my-accepted-missions-filters-page-form">
            <div className="my-accepted-missions-filters-page-form-row">
                <div className="my-accepted-missions-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => myAcceptedMissionsContext.setFiltersFormData({ ...myAcceptedMissionsContext.filtersFormData, search: value })}
                        value={myAcceptedMissionsContext.filtersFormData.search || ''}
                        type="text"
                        label="Busca"
                        maxLength={100}
                    />
                </div>
            </div>
            <div className="my-accepted-missions-filters-page-form-row">
                <div className="my-accepted-missions-filters-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => myAcceptedMissionsContext.setFiltersFormData({ ...myAcceptedMissionsContext.filtersFormData, status: value })}
                        options={[missionStatusEnum.COMPLETED, missionStatusEnum.IN_PROGRESS]
                            .map((type) => ({ label: missionStatusMasksEnum[type], value: type }))}
                        label="Status"
                        value={myAcceptedMissionsContext.filtersFormData.status || ''}
                        inputValue={statusInputValue}
                        onInputChange={setStatusInputValue}
                    />
                </div>
                <div className="my-accepted-missions-filters-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => myAcceptedMissionsContext.setFiltersFormData({ ...myAcceptedMissionsContext.filtersFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={myAcceptedMissionsContext.filtersFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
