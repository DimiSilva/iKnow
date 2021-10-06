import React from 'react'
import { useProfile } from '../../../../providers/profile'

const Name: React.FC = () => {
    const profileProvider = useProfile()

    return (
        <div className="profile-page-name-container">
            <div className="profile-page-name-container-text-container"><h1>{profileProvider.profileData.name}</h1></div>
            <div className="profile-page-name-container-action-container" />
        </div>
    )
}

export default Name
