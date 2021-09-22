import { missionCategoriesEnum, missionCategoriesMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown } from '../../../../components'

import { useMissions } from '../../../../providers/missions'

const WhoIAm: React.FC = () => {
    const missionsProvider = useMissions()
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="missions-filters-page-form">
            <div className="missions-filters-page-form-row">
                <div className="missions-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => missionsProvider.setFiltersFormData({ ...missionsProvider.filtersFormData, search: value })}
                        value={missionsProvider.filtersFormData.search || ''}
                        type="text"
                        label="Busca"
                        maxLength={100}
                    />
                </div>
                <div className="missions-filters-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => missionsProvider.setFiltersFormData({ ...missionsProvider.filtersFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={missionsProvider.filtersFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
