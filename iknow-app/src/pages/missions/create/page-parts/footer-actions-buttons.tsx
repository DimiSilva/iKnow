import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useMissions } from '../../../../providers/missions'

const HeaderActionsButtons: React.FC = () => {
    const appContext = useApp()
    const missionsContext = useMissions()

    return (
        <div className="missions-create-page-footer-actions-buttons">
            <div className="missions-create-page-footer-actions-buttons-button-container">
                <Button
                    onClick={missionsContext.create}
                    text="Criar"
                    loading={missionsContext.loadingsData.createSubmitting}
                />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
