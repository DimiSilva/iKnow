import './style.scss'

import React from 'react'
import { missionStatusMasksEnum } from 'iknow-common/enums'
import IComponentProps from './interfaces/i-component-props'
import { Icons, InfiniteScroll, Collapse, LinkButton } from '../index'

const MissionsList: React.FC<IComponentProps> = ({ onScrollEnd, onAuthorClick, loading, missions, view }) => (
    <div className="missions-list">
        <InfiniteScroll
            onScrollEnd={onScrollEnd}
            emptyMessage="Nenhuma missão cadastrada"
            loading={loading}
        >
            {missions.length > 0 ? missions.map((mission) => (
                <div key={mission._id} className="missions-list-collapse-container">
                    <Collapse
                        title={mission.title}
                        action={{ icon: Icons.Forward, onClick: () => view(mission) }}
                    >
                        <div className="missions-list-collapse-container-content-container">
                            <div className="missions-list-collapse-container-content-container-header">
                                <div className="missions-list-collapse-container-content-container-header-created-by-container">
                                    <span>Criado Por: </span>
                                    <LinkButton text={mission.owner.name} onClick={() => onAuthorClick(mission.owner._id)} />
                                </div>
                                <div className="missions-list-collapse-container-content-container-header-status-container">
                                    <span>Status: </span>
                                    {missionStatusMasksEnum[mission.status]}
                                </div>
                            </div>
                            <div className="missions-list-collapse-container-content-container-content">
                                {mission.description}
                            </div>
                        </div>
                    </Collapse>
                </div>
            )) : undefined}
        </InfiniteScroll>
    </div>
)

MissionsList.defaultProps = { onScrollEnd: () => {}, loading: false }

export default MissionsList
