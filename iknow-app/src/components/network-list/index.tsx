import './style.scss'

import React from 'react'
import IComponentProps from './interfaces/i-component-props'
import { Icons, InfiniteScroll, Collapse } from '../index'

const MissionsList: React.FC<IComponentProps> = ({ onScrollEnd, loading, users, view }) => (
    <div className="network-list">
        <InfiniteScroll
            onScrollEnd={onScrollEnd}
            emptyMessage="Nenhum usuário encontrado"
            loading={loading}
        >
            {users.length > 0 ? users.map((user) => (
                <div key={user._id} className="network-list-collapse-container">
                    <Collapse
                        title={user.name}
                        action={{ icon: Icons.Forward, onClick: () => view(user._id) }}
                        emptyContentMessage="O usuário não tem uma descrição de quem é"
                    >
                        { user.whoIAm ? (
                            <div className="network-list-collapse-container-content-container">
                                <div className="network-list-collapse-container-content-container-content">
                                    (
                                    <p>
                                        {user.whoIAm}
                                    </p>
                                    )
                                </div>
                            </div>
                        ) : undefined}
                    </Collapse>
                </div>
            )) : undefined}
        </InfiniteScroll>
    </div>
)

MissionsList.defaultProps = { onScrollEnd: () => {}, loading: false }

export default MissionsList
