import React from 'react'
import { enums } from 'iknow-common'
import { LabelText } from '../../../../components'
import { useProfile } from '../../../../providers/profile'
import { useMyAcceptedMissions } from '../../../../providers/my-accepted-missions'

const Data: React.FC = () => {
    const myAcceptedMissionsProvider = useMyAcceptedMissions()
    const profileProvider = useProfile()

    return (
        <form className="my-accepted-mission-view-page-form">
            <div className="my-accepted-mission-view-page-form-row">
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText
                        label="Criada Por"
                        text={myAcceptedMissionsProvider.missionInVisualization.owner.name}
                        onTextClick={
                            () => profileProvider.call((myAcceptedMissionsProvider.missionInVisualization.owner._id))
                        }
                    />
                </div>
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Aceita Por" text={(myAcceptedMissionsProvider.missionInVisualization.acceptedBy || {}).name || ''} />
                </div>
            </div>
            <div className="my-accepted-mission-view-page-form-row">
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Título" text={myAcceptedMissionsProvider.missionInVisualization.title} />
                </div>
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Categoria" text={enums.missionCategoriesMasksEnum[myAcceptedMissionsProvider.missionInVisualization.category]} />
                </div>
            </div>
            <div className="my-accepted-mission-view-page-form-row">
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Descrição" text={myAcceptedMissionsProvider.missionInVisualization.description} />
                </div>
            </div>
        </form>
    )
}

export default Data
