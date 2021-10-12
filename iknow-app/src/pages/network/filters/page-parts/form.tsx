import React from 'react'
import { Input } from '../../../../components'
import { useNetwork } from '../../../../providers/network'

const WhoIAm: React.FC = () => {
    const networkContext = useNetwork()

    return (
        <form className="network-filters-page-form">
            <div className="network-filters-page-form-row">
                <div className="network-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => networkContext.setFiltersFormData({ ...networkContext.filtersFormData, search: value })}
                        value={networkContext.filtersFormData.search || ''}
                        type="text"
                        label="Busca"
                        maxLength={100}
                    />
                </div>
            </div>
        </form>
    )
}

export default WhoIAm
