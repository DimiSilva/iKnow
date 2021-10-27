import React from 'react'
import { Button } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'

const HeaderActionsButtons: React.FC = () => {
    const myMissionsContext = useMyMissions()

    return (
        <div className="my-missions-create-page-footer-actions-buttons">
            <div className="my-missions-create-page-footer-actions-buttons-button-container">
                <Button
                    onClick={myMissionsContext.create}
                    text="Criar"
                    loading={myMissionsContext.loadingsData.createSubmitting}
                />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
