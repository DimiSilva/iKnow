import React, { useEffect } from 'react'
import { NetworkList } from '../../../components'
import { useNetwork } from '../../../providers/network'
import { useProfile } from '../../../providers/profile'
import { useSearchContacts } from '../../../providers/search-contacts'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const SearchContacts: React.FC<IComponentProps> = () => {
    const searchContactsContext = useSearchContacts()
    const profileContext = useProfile()

    useEffect(() => {
        searchContactsContext.getUsers()
        return searchContactsContext.clear
    }, [])

    return (
        <div className="search-contacts-page">
            <pageParts.HeaderActionsButtons />
            <NetworkList
                users={searchContactsContext.users}
                onScrollEnd={searchContactsContext.getNextPage}
                view={profileContext.call}
                loading={searchContactsContext.loadingsData.searching}
            />
        </div>
    )
}

SearchContacts.defaultProps = {}

export default SearchContacts
