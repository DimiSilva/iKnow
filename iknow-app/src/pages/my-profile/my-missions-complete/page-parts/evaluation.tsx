import React from 'react'
import { enums } from 'iknow-common'
import { Icons, LabelText } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'
import { useProfile } from '../../../../providers/profile'
import variables from '../../../../theme/variables'

const Evaluation: React.FC = () => {
    const myMissionsContext = useMyMissions()

    const renderStars = () => Array(5).fill('').map((_, index) => {
        const position = index + 1
        const Icon = myMissionsContext.evaluation && myMissionsContext.evaluation >= position
            ? Icons.StarFull
            : Icons.StarEmpty

        return (
            <button
                onClick={
                    () => myMissionsContext.setEvaluation(myMissionsContext.evaluation === position ? undefined : position)
                }
                type="button"
                key={position}
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
