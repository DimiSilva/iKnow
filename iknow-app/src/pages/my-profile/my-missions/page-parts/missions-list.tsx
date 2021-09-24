import React from 'react'
import { Collapse, InfiniteScroll, LinkButton } from '../../../../components'
import { useMyMissions } from '../../../../providers/my-missions'

const MissionsList: React.FC = () => {
    const myMissionsProvider = useMyMissions()

    return (
        <div className="my-missions-page-missions-list">
            <InfiniteScroll
                onScrollEnd={myMissionsProvider.getNextPage}
                emptyMessage="Nenhuma missão cadastrada"
                loading={myMissionsProvider.loadingsData.searching}
            >
                {myMissionsProvider.missions.map((mission) => (
                    <div key={mission._id} className="my-missions-page-missions-list-collapse-container">
                        <Collapse
                            title={mission.title}
                        >
                            <div className="my-missions-page-missions-list-collapse-container-content-container">
                                <div className="my-missions-page-missions-list-collapse-container-content-container-header">
                                    <span>Criado Por: </span>
                                    <LinkButton text={mission.owner.name} onClick={() => {}} />
                                </div>
                                <div className="my-missions-page-missions-list-collapse-container-content-container-content">
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
