import React, { useEffect } from 'react'
import { PageLoading, ProfileAcknowledgements, ProfileAchievements } from '../../../components'
import { useMyProfile } from '../../../providers/my-profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyProfile: React.FC<IComponentProps> = () => {
    const myProfileContext = useMyProfile()

    useEffect(myProfileContext.getMyProfileData, [])

    return (
        !myProfileContext.loadingsData.searching ? (
            <div className="my-profile-page">
                <pageParts.Name />
                <pageParts.Ratings />
                <pageParts.HeaderActionsButtons />
                <ProfileAchievements achievements={myProfileContext
                    .myProfileData
                    .achievements.map((userAchievement) => userAchievement.achievement)}
                />
                <ProfileAcknowledgements acknowledgements={myProfileContext
                    .myProfileData
                    .acknowledgements.map((userAcknowledgement) => userAcknowledgement.acknowledgement)}
                />
                <pageParts.WhoIAm />
                <pageParts.WhatDoIDo />
                <pageParts.MyInterests />
                <pageParts.FooterActionsButtons />
            </div>
        ) : <PageLoading />
    )
}

MyProfile.defaultProps = {
}

export default MyProfile
