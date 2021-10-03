import React, { useEffect } from 'react'
import { NetworkList } from '../../../components'
import { useNetwork } from '../../../providers/network'
import { useProfile } from '../../../providers/profile'
import { useSearchContacts } from '../../../providers/search-contacts'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const SearchContacts: React.FC<IComponentProps> = () => {
    const searchContactsProvider = useSearchContacts()
    const profileProvider = useProfile()

    useEffect(() => {
        searchContactsProvider.getUsers()
        return searchContactsProvider.clear
    }, [])

    return (
        <div className="search-contacts-page">
            <pageParts.HeaderActionsButtons />
            <NetworkList
                users={searchContactsProvider.users}
                onScrollEnd={searchContactsProvider.getNextPage}
                view={profileProvider.call}
                loading={searchContactsProvider.loadingsData.searching}
            />
        </div>
    )
}

SearchContacts.defaultProps = {}

export default SearchContacts
