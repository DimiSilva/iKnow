import React, { useState } from 'react'
import { phoneMask, removeMaskOfNumbers } from 'iknow-common/utils'
import { Card, PageHeader, Input, Button, LinkButton } from '../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useRegister } from '../../providers/register'
import { useApp } from '../../providers/app'

const Profile: React.FC<IComponentProps> = () => {
    const { registerData, setRegisterData, invalidRegisterData, loadingsData, submitted, register } = useRegister()
    const { navigateTo } = useApp()

    return (
        <div className="profile-page-container">
            <div className="profile-page-internal-container">
                a
            </div>
        </div>
    )
}

Profile.defaultProps = {
}

export default Profile
