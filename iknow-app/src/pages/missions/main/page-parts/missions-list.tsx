import React, { useState, useEffect } from 'react'
import { Collapse, Icons, InfiniteScroll, LinkButton } from '../../../../components'
import { useApp } from '../../../../providers/app'

import { useMissions } from '../../../../providers/missions'

const MissionsList: React.FC = () => {
    const missionsProvider = useMissions()

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
                                    <LinkButton text={mission.owner.name} onClick={() => {}} />
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
