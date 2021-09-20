import React from 'react'
import { Collapse, Icons } from '../../../../components'

import { useMissions } from '../../../../providers/missions'

const WhoIAm: React.FC = () => {
    const missionsProvider = useMissions()

    return (
        <div className="missions-page-missions-list">
            {missionsProvider.missions.map((mission) => (
                <div key={mission._id} className="missions-page-missions-list-collapse-container">
                    <Collapse
                        title={mission.title}
                    // action={{
                    //     icon: Icons.Edit,
                    //     onClick: () => fieldEditingProvider.call({
                    //         backPath: '/meu-perfil',
                    //         fieldLabel: 'Quem eu Sou',
                    //         fieldKey: 'whoIAm',
                    //         onSave: myProfileProvider.updateData,
                    //         pageTitle: 'Editando Perfil',
                    //         fieldMaxLength: 1000,
                    //         initialValue: myProfileProvider.myProfileData.whoIAm,
                    //         inputType: 'textArea',
                    //     }),
                    // }}
                    >
                        <div className="missions-page-missions-list-collapse-container-content-container">{mission.description}</div>
                    </Collapse>
                </div>
            ))}
        </div>
    )
}

export default WhoIAm
