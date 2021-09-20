import { missionTypesEnum } from 'iknow-common/enums'
import React, { useState } from 'react'
import { Input, Dropdown } from '../../../../components'

import { useMissions } from '../../../../providers/missions'

const WhoIAm: React.FC = () => {
    const missionsProvider = useMissions()
    const [inputValue, setInputValue] = useState('')

    return (
        <form className="missions-filters-page-form">
            <div className="missions-filters-page-form-input-container">
                <Input
                    onChange={(value) => missionsProvider.setFiltersFormData({ ...missionsProvider.filtersFormData, search: value })}
                    value={missionsProvider.filtersFormData.search || ''}
                    type="text"
                    label="Busca"
                    maxLength={100}
                />
            </div>
            <div className="missions-filters-page-form-input-container">
                <Dropdown
                    onChange={(value) => missionsProvider.setFiltersFormData({ ...missionsProvider.filtersFormData, type: value })}
                    options={Object.values(missionTypesEnum).map((type) => ({ label: type, value: type }))}
                    label="Tipo"
                    value={missionsProvider.filtersFormData.type || ''}
                    inputValue={inputValue}
                    onInputChange={setInputValue}
                />
            </div>
        </form>
    )
}

export default WhoIAm
