import React, { useEffect } from 'react'
import { PropagateLoader } from 'react-spinners'
import { useMyMissions } from '../../../../providers/my-missions'
import { Acknowledgement } from '../../../../components'
import { useGamification } from '../../../../providers/gamification'
import variables from '../../../../theme/variables'

const AcknowledgementItems: React.FC = () => {
    const myMissionsContext = useMyMissions()
    const gamificationContext = useGamification()

    useEffect(() => {
        gamificationContext.getAcknowledgements()
        return myMissionsContext.clear
    }, [])

    return (
        <div className="my-mission-complete-page-acknowledgement">
            <div className="my-mission-complete-page-acknowledgement-header">
                <p>Elogiar</p>
            </div>
            {gamificationContext.loadingsData.searchingAcknowledgements
                ? (
                    <div className="my-mission-complete-page-acknowledgement-loading">
                        <PropagateLoader color={variables.quaternaryColor} size="12px" speedMultiplier={1} />
                    </div>
                )
                : (
                    <div className="my-mission-complete-page-acknowledgement-items">
                        {gamificationContext.acknowledgements.map((acknowledgement) => (
                            <div key={acknowledgement._id}>
                                <Acknowledgement
                                    type={acknowledgement.type}
                                    title={acknowledgement.title}
                                    description={acknowledgement.description}
                                    onClick={() => myMissionsContext.setAcknowledgement(acknowledgement)}
                                    isSelected={((myMissionsContext.acknowledgement || {})._id || '') === acknowledgement._id}
                                />
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default AcknowledgementItems
