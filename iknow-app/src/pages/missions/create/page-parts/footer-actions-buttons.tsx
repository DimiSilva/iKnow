import React from 'react'
import { Button } from '../../../../components'
import { useApp } from '../../../../providers/app'
import { useMissions } from '../../../../providers/missions'

const HeaderActionsButtons: React.FC = () => {
    const appProvider = useApp()
    const missionsProvider = useMissions()

    return (
        <div className="missions-create-page-footer-actions-buttons">
            <div className="missions-create-page-footer-actions-buttons-button-container">
                <Button
                    onClick={missionsProvider.create}
                    text="Criar"
                    loading={missionsProvider.loadingsData.createSubmitting}
                />
            </div>
        </div>
    )
}

export default HeaderActionsButtons
