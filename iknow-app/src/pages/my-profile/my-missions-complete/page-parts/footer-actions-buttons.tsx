import React from 'react'
import { missionStatusEnum } from 'iknow-common/enums'
import { Button } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'

const HeaderActionsButtons: React.FC = () => {
    const myMissionsContext = useMyMissions()

    return (
        <div className="my-mission-complete-page-footer-actions-buttons">
            <div className="my-mission-complete-page-footer-actions-buttons-button-container">
                <Button
                    onClick={myMissionsContext.complete}
                    text="Concluir"
                    loading={myMissionsContext.loadingsData.completing}
                />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
