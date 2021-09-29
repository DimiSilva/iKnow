import React from 'react'
import { Button } from '../../../../components'
import { useMissions } from '../../../../providers/missions'

const HeaderActionsButtons: React.FC = () => {
    const missionsProvider = useMissions()

    return (
        !missionsProvider.missionInVisualization.acceptedBy ? (
            <div className="mission-view-page-footer-actions-buttons">
                <div className="mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={missionsProvider.accept}
                        text="Aceitar"
                        loading={missionsProvider.loadingsData.accepting}
                    />
                </div>
            </div>
        ) : (
            <div className="mission-view-page-footer-actions-buttons">
                <div className="mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={() => {}}
                        text="Chat"
                        disabled
                        loading={false}
                    />
                </div>
                <div className="mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={missionsProvider.giveUp}
                        text="Desistir"
                        loading={missionsProvider.loadingsData.givingUp}
                    />
                </div>
            </div>
        )
    )
}

export default HeaderActionsButtons
