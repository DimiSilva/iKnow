import React from 'react'
import { Button } from '../../../../components'
import { useMissions } from '../../../../providers/missions'

const HeaderActionsButtons: React.FC = () => {
    const missionsContext = useMissions()

    return (
        !missionsContext.missionInVisualization.acceptedBy ? (
            <div className="mission-view-page-footer-actions-buttons">
                <div className="mission-view-page-footer-actions-buttons-button-container">
                    <Button
                        onClick={missionsContext.accept}
                        text="Aceitar"
                        loading={missionsContext.loadingsData.accepting}
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
                        onClick={missionsContext.giveUp}
                        text="Desistir"
                        loading={missionsContext.loadingsData.givingUp}
                    />
                </div>
            </div>
        )
    )
}

export default HeaderActionsButtons
