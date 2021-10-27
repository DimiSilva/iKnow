import React from 'react'
import common from '../../common'
import { Collapse, Acknowledgement } from '../index'
import IComponentProps from './interfaces/i-component-props'
import './style.scss'

const ProfileAcknowledgements: React.FC<IComponentProps> = ({ acknowledgements }) => {
    const groupedAcknowledgements = acknowledgements
        .reduce(
            (groupedAcknowledgements: Array<{ quantity: number, data: typeof common.dataModels.acknowledgement}>, acknowledgement) => {
                const alreadyInGroup = groupedAcknowledgements
                    .some((gAcknowledgement) => gAcknowledgement.data._id === acknowledgement._id)

                if (alreadyInGroup) return groupedAcknowledgements
                    .map((gAcknowledgement) => (gAcknowledgement.data._id === acknowledgement._id
                        ? { ...gAcknowledgement, quantity: gAcknowledgement.quantity + 1 }
                        : gAcknowledgement))

                return [...groupedAcknowledgements, { data: acknowledgement, quantity: 1 }]
            }, [],
        )

    return (
        <div className="profile-acknowledgements">
            <Collapse
                title="Reconhecimento"
                info={`\
Nessa sessão você pode o reconhecimento, as pessoas dão reconhecimento com base em ações e comportamentos`}
                emptyContentMessage="Ops, nenhum reconhecimento ainda..."
                defaultState="open"
            >

                {groupedAcknowledgements.length > 0
                    ? (
                        <div className="profile-acknowledgements-acknowledgements">
                            {
                                groupedAcknowledgements.map((acknowledgement) => (
                                    <div key={acknowledgement.data._id}>
                                        <Acknowledgement
                                            type={acknowledgement.data.type}
                                            title={acknowledgement.data.title}
                                            description={acknowledgement.data.description}
                                        />
                                        <div className="profile-acknowledgements-acknowledgements-item-quantity">
                                            {acknowledgement.quantity}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                    : undefined}

            </Collapse>
        </div>
    )
}

export default ProfileAcknowledgements
