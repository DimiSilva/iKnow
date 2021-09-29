import React from 'react'
import { enums } from 'iknow-common'
import { Icons, LabelText } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useProfile } from '../../../../providers/profile'
import variables from '../../../../theme/variables'

const Evaluation: React.FC = () => {
    const myMissionsProvider = useMyMissions()

    const renderStars = () => Array(5).fill('').map((_, index) => {
        const position = index + 1
        const Icon = myMissionsProvider.evaluation && myMissionsProvider.evaluation >= position
            ? Icons.StarFull
            : Icons.StarEmpty

        return (
            <button
                onClick={
                    () => myMissionsProvider.setEvaluation(myMissionsProvider.evaluation === position ? undefined : position)
                }
                type="button"
            >
                <Icon size="30px" color={variables.quaternaryColor} />
            </button>
        )
    })

    return (
        <div className="my-mission-complete-page-evaluation">
            {renderStars()}
        </div>
    )
}

export default Evaluation
