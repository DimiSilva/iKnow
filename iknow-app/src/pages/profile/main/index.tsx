import React, { useEffect } from 'react'
import { PageLoading, ProfileAchievements, ProfileAcknowledgements } from '../../../components'
import { useProfile } from '../../../providers/profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyProfile: React.FC<IComponentProps> = () => {
    const profileContext = useProfile()

    return (
        !profileContext.loadingsData.searching ? (
            <div className="profile-page">
                <pageParts.Name />
                <pageParts.Ratings />
                <pageParts.HeaderActionsButtons />
                <ProfileAchievements achievements={profileContext
                    .profileData
                    .achievements.map((userAchievement) => userAchievement.achievement)}
                />
                <ProfileAcknowledgements acknowledgements={profileContext
                    .profileData
                    .acknowledgements.map((userAcknowledgement) => userAcknowledgement.acknowledgement)}
                />
                <pageParts.WhoIAm />
                <pageParts.WhatDoIDo />
                <pageParts.MyInterests />
            </div>
        ) : <PageLoading />
    )
}

MyProfile.defaultProps = {
}

export default MyProfile
