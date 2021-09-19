import React, { useEffect } from 'react'
import { PageLoading } from '../../../components'
import { useMyProfile } from '../../../providers/my-profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyProfile: React.FC<IComponentProps> = () => {
    const myProfileProvider = useMyProfile()

    useEffect(myProfileProvider.getMyProfileData, [])

    return (
        !myProfileProvider.loadingsData.searching ? (
            <div className="profile-page">
                <pageParts.Name />
                <pageParts.Ratings />
                <pageParts.HeaderActionsButtons />
                <pageParts.Achievements />
                <pageParts.Acknowledgement />
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
