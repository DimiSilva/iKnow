import React, { useEffect } from 'react'
import { NetworkList } from '../../../components'
import { useNetwork } from '../../../providers/network'
import { useProfile } from '../../../providers/profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const Network: React.FC<IComponentProps> = () => {
    const networkContext = useNetwork()
    const profileContext = useProfile()

    useEffect(() => {
        networkContext.getUsers()
        return networkContext.clear
    }, [])

    return (
        <div className="network-page">
            <pageParts.HeaderActionsButtons />
            <NetworkList
                users={networkContext.users}
                onScrollEnd={networkContext.getNextPage}
                view={profileContext.call}
                loading={networkContext.loadingsData.searching}
            />
        </div>
    )
}

Network.defaultProps = {}

export default Network
