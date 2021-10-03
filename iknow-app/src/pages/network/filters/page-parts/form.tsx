import React from 'react'
import { Input } from '../../../../components'
import { useNetwork } from '../../../../providers/network'

const WhoIAm: React.FC = () => {
    const networkProvider = useNetwork()

    return (
        <form className="network-filters-page-form">
            <div className="network-filters-page-form-row">
                <div className="network-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => networkProvider.setFiltersFormData({ ...networkProvider.filtersFormData, search: value })}
                        value={networkProvider.filtersFormData.search || ''}
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
