import React from 'react'
import { missionStatusEnum } from 'iknow-common/enums'
import { Button } from '../../../../components'
import { useMyAcceptedMissions } from '../../../../providers/my-accepted-missions'

const HeaderActionsButtons: React.FC = () => {
    const myAcceptedMissionsProvider = useMyAcceptedMissions()

    return (
        myAcceptedMissionsProvider.missionInVisualization.status === missionStatusEnum.IN_PROGRESS ? (
            <div className="my-accepted-mission-view-page-footer-actions-buttons">
                <div className="my-accepted-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={() => {}}
                        text="Chat"
                        disabled
                        loading={false}
                    />
                </div>
                <div className="my-accepted-mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={myAcceptedMissionsProvider.giveUp}
                        text="Desistir"
                        loading={myAcceptedMissionsProvider.loadingsData.givingUp}
                    />
                </div>
            </div>
        ) : (
            <div className="my-accepted-mission-view-page-footer-actions-buttons" />
        )
    )
}

export default HeaderActionsButtons
