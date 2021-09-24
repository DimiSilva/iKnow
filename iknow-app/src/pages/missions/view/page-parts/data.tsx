import React from 'react'
import { enums } from 'iknow-common'
import { LabelText } from '../../../../components'
import { useMissions } from '../../../../providers/missions'

const Data: React.FC = () => {
    const missionsProvider = useMissions()

    return (
        <form className="mission-view-page-form">
            <div className="mission-view-page-form-row">
                <div className="mission-view-page-form-row-label-text-container">
                    <LabelText label="Criada Por" text={missionsProvider.missionInVisualization.owner.name} />
                </div>
            </div>
            <div className="mission-view-page-form-row">
                <div className="mission-view-page-form-row-label-text-container">
                    <LabelText label="Título" text={missionsProvider.missionInVisualization.title} />
                </div>
                <div className="mission-view-page-form-row-label-text-container">
                    <LabelText label="Categoria" text={enums.missionCategoriesMasksEnum[missionsProvider.missionInVisualization.category]} />
                </div>
            </div>
            <div className="mission-view-page-form-row">
                <div className="mission-view-page-form-row-label-text-container">
                    <LabelText label="Descrição" text={missionsProvider.missionInVisualization.description} />
                </div>
            </div>
        </form>
    )
}

export default Data
