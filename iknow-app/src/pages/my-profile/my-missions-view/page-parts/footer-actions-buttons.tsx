import React from 'react'
import { missionStatusEnum } from 'iknow-common/enums'
import { Button } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const myMissionsProvider = useMyMissions()
    const appProvider = useApp()

    return (
        myMissionsProvider.missionInVisualization.status === missionStatusEnum.IDLE ? (
            <div className="my-mission-view-page-footer-actions-buttons">
                <div className="my-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={myMissionsProvider.cancel}
                        text="Cancelar"
                        loading={myMissionsProvider.loadingsData.cancelling}
                    />
                </div>
            </div>
        ) : myMissionsProvider.missionInVisualization.status === missionStatusEnum.IN_PROGRESS ? (
            <div className="my-mission-view-page-footer-actions-buttons">
                <div className="my-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={() => {}}
                        text="Chat"
                        disabled
                        loading={false}
                    />
                </div>
                <div className="my-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={myMissionsProvider.unbind}
                        text="Desvincular"
                        loading={myMissionsProvider.loadingsData.unbinding}
                    />
                </div>
                <div className="my-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={() => appProvider.navigateTo('/meu-perfil/missoes/completar', true)}
                        text="Concluir"
                    />
                </div>
            </div>
        ) : myMissionsProvider.missionInVisualization.status === missionStatusEnum.COMPLETED ? (
            <div className="my-mission-view-page-notification-of-completed">
                <p>Missão concluída!</p>
            </div>
        ) : (
            <div className="my-mission-view-page-notification-of-canceled">
                <p>Missão cancelada...</p>
            </div>
        )
    )
}

export default HeaderActionsButtons
