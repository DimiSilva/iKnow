import React from 'react'
import { Button, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'

const HeaderActionsButtons: React.FC = () => {
    const myProfileProvider = useMyProfile()

    return (
        <div className="missions-page-header-actions-buttons-container">
            <div className="missions-page-header-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Criar missão" />
            </div>
            <div className="missions-page-header-actions-buttons-container-button-container">
                <button className="missions-page-header-actions-buttons-container-button-container-filter-button" type="button"><Icons.Filter /></button>
            </div>
        </div>
    )
}

export default HeaderActionsButtons
