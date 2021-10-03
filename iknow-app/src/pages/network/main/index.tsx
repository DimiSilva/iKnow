import React, { useEffect } from 'react'
import { NetworkList } from '../../../components'
import { useNetwork } from '../../../providers/network'
import { useProfile } from '../../../providers/profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Network: React.FC<IComponentProps> = () => {
    const networkProvider = useNetwork()
    const profileProvider = useProfile()

    useEffect(() => {
        networkProvider.getUsers()
        return networkProvider.clear
    }, [])

    return (
        <div className="network-page">
            <pageParts.HeaderActionsButtons />
            <NetworkList
                users={networkProvider.users}
                onScrollEnd={networkProvider.getNextPage}
                view={profileProvider.call}
                loading={networkProvider.loadingsData.searching}
            />
        </div>
    )
}

Network.defaultProps = {}

export default Network
