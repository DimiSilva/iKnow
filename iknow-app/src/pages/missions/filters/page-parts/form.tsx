import { missionCategoriesEnum, missionCategoriesMasksEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown } from '../../../../components'

import { useMissions } from '../../../../providers/missions'

const WhoIAm: React.FC = () => {
    const missionsContext = useMissions()
    const [subjectInputValue, setSubjectInputValue] = useState('')

    return (
        <form className="missions-filters-page-form">
            <div className="missions-filters-page-form-row">
                <div className="missions-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => missionsContext.setFiltersFormData({ ...missionsContext.filtersFormData, search: value })}
                        value={missionsContext.filtersFormData.search || ''}
                        type="text"
                        label="Busca"
                        maxLength={100}
                    />
                </div>
                <div className="missions-filters-page-form-row-input-container">
                    <Dropdown
                        onChange={(value) => missionsContext.setFiltersFormData({ ...missionsContext.filtersFormData, category: value })}
                        options={Object.values(missionCategoriesEnum).map((type) => ({ label: missionCategoriesMasksEnum[type], value: type }))}
                        label="Categoria"
                        value={missionsContext.filtersFormData.category || ''}
                        inputValue={subjectInputValue}
                        onInputChange={setSubjectInputValue}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
