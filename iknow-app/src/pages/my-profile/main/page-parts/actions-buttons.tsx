import React from 'react'
import { Button, Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const ActionsButtons: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <div className="profile-page-actions-buttons-container">
            <div className="profile-page-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Minhas Missões" />
            </div>
            <div className="profile-page-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Missões em Andamento" />
            </div>
            <div className="profile-page-actions-buttons-container-button-container">
                <Button onClick={() => {}} text="Histórico de Missões" />
            </div>
        </div>
    )
}

export default ActionsButtons
