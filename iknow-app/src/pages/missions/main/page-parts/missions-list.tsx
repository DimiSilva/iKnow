import React from 'react'
import { Collapse, Icons, InfiniteScroll, LinkButton } from '../../../../components'

import { useMissions } from '../../../../providers/missions'
import { useProfile } from '../../../../providers/profile'

const MissionsList: React.FC = () => {
    const missionsProvider = useMissions()
    const profileProvider = useProfile()

    return (
        <div className="missions-page-missions-list">
            <InfiniteScroll
                onScrollEnd={missionsProvider.getNextPage}
                emptyMessage="Nenhuma missão cadastrada"
                loading={missionsProvider.loadingsData.searching}
            >
                {missionsProvider.missions.map((mission) => (
                    <div key={mission._id} className="missions-page-missions-list-collapse-container">
                        <Collapse
                            title={mission.title}
                            action={{ icon: Icons.Forward, onClick: () => missionsProvider.view(mission) }}
                        >
                            <div className="missions-page-missions-list-collapse-container-content-container">
                                <div className="missions-page-missions-list-collapse-container-content-container-header">
                                    <span>Criado Por: </span>
                                    <LinkButton text={mission.owner.name} onClick={() => profileProvider.call(mission.owner._id)} />
                                </div>
                                <div className="missions-page-missions-list-collapse-container-content-container-content">
                                    {mission.description}
                                </div>
                            </div>
                        </Collapse>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default MissionsList
