import React from 'react'
import { Input } from '../../../../components'
import { useNetwork } from '../../../../providers/network'
import { useSearchContacts } from '../../../../providers/search-contacts'

const WhoIAm: React.FC = () => {
    const searchContactsContext = useSearchContacts()

    return (
        <form className="network-filters-page-form">
            <div className="network-filters-page-form-row">
                <div className="network-filters-page-form-row-input-container">
                    <Input
                        onChange={(value) => searchContactsContext.setFiltersFormData({ ...searchContactsContext.filtersFormData, search: value })}
                        value={searchContactsContext.filtersFormData.search || ''}
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
