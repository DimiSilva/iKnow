import React from 'react'
import { enums } from 'iknow-common'
import { LabelText } from '../../../../components'
import { useProfile } from '../../../../providers/profile'
import { useMyAcceptedMissions } from '../../../../providers/my-accepted-missions'

const Data: React.FC = () => {
    const myAcceptedMissionsContext = useMyAcceptedMissions()
    const profileContext = useProfile()

    return (
        <form className="my-accepted-mission-view-page-form">
            <div className="my-accepted-mission-view-page-form-row">
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText
                        label="Criada Por"
                        text={myAcceptedMissionsContext.missionInVisualization.owner.name}
                        onTextClick={
                            () => profileContext.call((myAcceptedMissionsContext.missionInVisualization.owner._id))
                        }
                    />
                </div>
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Aceita Por" text={(myAcceptedMissionsContext.missionInVisualization.acceptedBy || {}).name || ''} />
                </div>
            </div>
            <div className="my-accepted-mission-view-page-form-row">
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Título" text={myAcceptedMissionsContext.missionInVisualization.title} />
                </div>
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Categoria" text={enums.missionCategoriesMasksEnum[myAcceptedMissionsContext.missionInVisualization.category]} />
                </div>
            </div>
            <div className="my-accepted-mission-view-page-form-row">
                <div className="my-accepted-mission-view-page-form-row-label-text-container">
                    <LabelText label="Descrição" text={myAcceptedMissionsContext.missionInVisualization.description} />
                </div>
            </div>
        </form>
    )
}

export default Data
