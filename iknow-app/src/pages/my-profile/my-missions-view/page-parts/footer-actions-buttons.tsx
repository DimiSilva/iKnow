import React from 'react'
import { missionStatusEnum } from 'iknow-common/enums'
import { Button } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useApp } from '../../../../providers/app'

const HeaderActionsButtons: React.FC = () => {
    const myMissionsContext = useMyMissions()
    const appContext = useApp()

    return (
        myMissionsContext.missionInVisualization.status === missionStatusEnum.IDLE ? (
            <div className="my-mission-view-page-footer-actions-buttons">
                <div className="my-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={myMissionsContext.cancel}
                        text="Cancelar"
                        loading={myMissionsContext.loadingsData.cancelling}
                    />
                </div>
            </div>
        ) : myMissionsContext.missionInVisualization.status === missionStatusEnum.IN_PROGRESS ? (
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
                        onClick={myMissionsContext.unbind}
                        text="Desvincular"
                        loading={myMissionsContext.loadingsData.unbinding}
                    />
                </div>
                <div className="my-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={() => appContext.navigateTo('/meu-perfil/missoes/completar', true)}
                        text="Concluir"
                    />
                </div>
            </div>
        ) : myMissionsContext.missionInVisualization.status === missionStatusEnum.COMPLETED ? (
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
