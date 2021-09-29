import React from 'react'
import { missionStatusEnum } from 'iknow-common/enums'
import { Button } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'

const HeaderActionsButtons: React.FC = () => {
    const myMissionsProvider = useMyMissions()

    return (
        <div className="my-mission-complete-page-footer-actions-buttons">
            <div className="my-mission-complete-page-footer-actions-buttons-button-container">
                <Button
                    onClick={myMissionsProvider.complete}
                    text="Concluir"
                    loading={myMissionsProvider.loadingsData.completing}
                />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
