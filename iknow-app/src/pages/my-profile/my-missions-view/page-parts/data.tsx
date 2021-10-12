import React from 'react'
import { enums } from 'iknow-common'
import { LabelText } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useProfile } from '../../../../providers/profile'

const Data: React.FC = () => {
    const myMissionsContext = useMyMissions()
    const profileContext = useProfile()

    return (
        <form className="my-mission-view-page-form">
            <div className="my-mission-view-page-form-row">
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Criada Por" text={myMissionsContext.missionInVisualization.owner.name} />
                </div>
                <div className="my-mission-view-page-form-row-label-text-container">
                    {myMissionsContext.missionInVisualization.acceptedBy
                        ? (
                            <LabelText
                                label="Aceita Por"
                                text={myMissionsContext.missionInVisualization.acceptedBy.name}
                                onTextClick={
                                    () => profileContext.call((myMissionsContext.missionInVisualization.acceptedBy || {})._id || '')
                                }
                            />
                        )
                        : ''}
                </div>
            </div>
            <div className="my-mission-view-page-form-row">
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Título" text={myMissionsContext.missionInVisualization.title} />
                </div>
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Categoria" text={enums.missionCategoriesMasksEnum[myMissionsContext.missionInVisualization.category]} />
                </div>
            </div>
            <div className="my-mission-view-page-form-row">
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Descrição" text={myMissionsContext.missionInVisualization.description} />
                </div>
            </div>
        </form>
    )
}

export default Data
