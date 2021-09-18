import React from 'react'
import { Button, Collapse, Icons, PageLoading } from '../../../components'
import { useFieldEditing } from '../../../providers/field-editing'
import { useMyProfile } from '../../../providers/my-profile'
import IComponentProps from './interfaces/i-component-props'
import pageParts from './page-parts'
import './style.scss'

const MyProfile: React.FC<IComponentProps> = () => {
    const myProfileProvider = useMyProfile()

    return (
        !myProfileProvider.loadingsData.searching ? (
            <div className="profile-page">
                <pageParts.Name />
                <pageParts.Ratings />
                <pageParts.ActionsButtons />
                <pageParts.Achievements />
                <pageParts.Acknowledgment />
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
