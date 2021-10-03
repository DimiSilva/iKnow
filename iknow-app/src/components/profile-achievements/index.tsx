import React from 'react'
import { Collapse, Achievement } from '../index'
import IComponentProps from './interfaces/i-component-props'
import './style.scss'

const ProfileAchievements: React.FC<IComponentProps> = ({ achievements }) => (
    <div className="profile-achievements">
        <Collapse
            title="Reconhecimento"
            info={`\
Nessa sessão você pode as conquistas, conquistas podem ser ganhas realizando determinadas ações`}
            emptyContentMessage="Ops, nenhuma conquista ainda..."
            defaultState="open"
        >

            {achievements.length > 0
                ? (
                    <div className="profile-achievements-achievements">
                        {
                            achievements.map((achievement) => (
                                <div key={achievement.key + achievement.tier}>
                                    <Achievement
                                        _key={achievement.key}
                                        tier={achievement.tier}
                                        title={achievement.title}
                                        description={achievement.description}
                                    />
                                </div>
                            ))
                        }
                    </div>
                )
                : undefined}

        </Collapse>
    </div>
)

export default ProfileAchievements
