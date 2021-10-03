import React from 'react'
import { Input } from '../../../../components'
import { useNetwork } from '../../../../providers/network'
import { useSearchContacts } from '../../../../providers/search-contacts'

const WhoIAm: React.FC = () => {
    const searchContactsProvider = useSearchContacts()

    return (
        <form className="network-filters-page-form">
            <div className="network-filters-page-form-row">
                <div className="network-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => searchContactsProvider.setFiltersFormData({ ...searchContactsProvider.filtersFormData, search: value })}
                        value={searchContactsProvider.filtersFormData.search || ''}
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
