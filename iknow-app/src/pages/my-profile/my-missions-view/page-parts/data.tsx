import React from 'react'
import { enums } from 'iknow-common'
import { LabelText } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useProfile } from '../../../../providers/profile'

const Data: React.FC = () => {
    const myMissionsProvider = useMyMissions()
    const profileProvider = useProfile()

    return (
        <form className="my-mission-view-page-form">
            <div className="my-mission-view-page-form-row">
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Criada Por" text={myMissionsProvider.missionInVisualization.owner.name} />
                </div>
                <div className="my-mission-view-page-form-row-label-text-container">
                    {myMissionsProvider.missionInVisualization.acceptedBy
                        ? (
                            <LabelText
                                label="Aceita Por"
                                text={myMissionsProvider.missionInVisualization.acceptedBy.name}
                                onTextClick={
                                    () => profileProvider.call((myMissionsProvider.missionInVisualization.acceptedBy || {})._id || '')
                                }
                            />
                        )
                        : ''}
                </div>
            </div>
            <div className="my-mission-view-page-form-row">
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Título" text={myMissionsProvider.missionInVisualization.title} />
                </div>
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Categoria" text={enums.missionCategoriesMasksEnum[myMissionsProvider.missionInVisualization.category]} />
                </div>
            </div>
            <div className="my-mission-view-page-form-row">
                <div className="my-mission-view-page-form-row-label-text-container">
                    <LabelText label="Descrição" text={myMissionsProvider.missionInVisualization.description} />
                </div>
            </div>
        </form>
    )
}

export default Data
