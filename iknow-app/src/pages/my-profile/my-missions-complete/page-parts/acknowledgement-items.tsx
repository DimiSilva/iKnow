import React, { useEffect } from 'react'
import { PropagateLoader } from 'react-spinners'
import { useMyMissions } from '../../../../providers/my-missions'
import { Acknowledgement } from '../../../../components'
import { useGamification } from '../../../../providers/gamification'
import variables from '../../../../theme/variables'

const AcknowledgementItems: React.FC = () => {
    const myMissionsProvider = useMyMissions()
    const gamificationProvider = useGamification()

    useEffect(() => {
        gamificationProvider.getAcknowledgements()
        return myMissionsProvider.clear
    }, [])

    return (
        <div className="my-mission-complete-page-acknowledgement">
            <div className="my-mission-complete-page-acknowledgement-header">
                Elogiar
            </div>
            {gamificationProvider.loadingsData.searchingAcknowledgements
                ? (
                    <div className="my-mission-complete-page-acknowledgement-loading">
                        <PropagateLoader color={variables.quaternaryColor} size="12px" speedMultiplier={1} />
                    </div>
                )
                : (
                    <div className="my-mission-complete-page-acknowledgement-items">
                        {gamificationProvider.acknowledgements.map((acknowledgement) => (
                            <div>
                                <Acknowledgement
                                    type={acknowledgement.type}
                                    description={acknowledgement.description}
                                    onClick={() => myMissionsProvider.setAcknowledgement(acknowledgement)}
                                    isSelected={((myMissionsProvider.acknowledgement || {})._id || '') === acknowledgement._id}
                                />
                            </div>
                        ))}
                    </div>
                )}

        </div>
    )
}

export default AcknowledgementItems
