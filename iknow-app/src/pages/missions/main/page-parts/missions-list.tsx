import React, { useState, useEffect } from 'react'
import { Collapse, InfiniteScroll } from '../../../../components'

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
                        >
                            <div className="missions-page-missions-list-collapse-container-content-container">{mission.description}</div>
                        </Collapse>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default MissionsList
