import React from 'react'
import iknowCommon from 'iknow-common'
import { Collapse, Achievement } from '../index'
import IComponentProps from './interfaces/i-component-props'
import './style.scss'

const tiersOrder = {
    [iknowCommon.enums.achievementTiers.WOOD]: 1,
    [iknowCommon.enums.achievementTiers.BRONZE]: 2,
    [iknowCommon.enums.achievementTiers.SILVER]: 3,
    [iknowCommon.enums.achievementTiers.GOLD]: 4,
    [iknowCommon.enums.achievementTiers.DIAMOND]: 5,
}

const ProfileAchievements: React.FC<IComponentProps> = ({ achievements }) => (
    <div className="profile-achievements">
        <Collapse
            title="Conquistas"
            info={`\
Nessa sessão você pode ver as conquistas, conquistas podem ser ganhas realizando determinadas ações`}
            emptyContentMessage="Ops, nenhuma conquista ainda..."
            defaultState="open"
        >

            {achievements.length > 0
                ? (
                    <div className="profile-achievements-achievements">
                        {
                            achievements.sort((a, b) => {
                                if (tiersOrder[a.tier] > tiersOrder[b.tier]) return 1
                                if (tiersOrder[a.tier] < tiersOrder[b.tier]) return -1
                                return 0
                            }).map((achievement) => (
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
