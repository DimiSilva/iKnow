import React from 'react'
import { PageLoading } from '../../../components'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'
import { useSearchContacts } from '../../../providers/search-contacts'

const MissionsFilters: React.FC<IComponentProps> = () => {
    const searchContactsProvider = useSearchContacts()

    return (
        !searchContactsProvider.loadingsData.searching ? (
            <div className="network-filters-page">
                <pageParts.Form />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MissionsFilters.defaultProps = {
}

export default MissionsFilters
