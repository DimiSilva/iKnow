/* eslint-disable max-len */
import { achievementKeys } from 'iknow-common/enums'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import achievementsTiersColors from '../../theme/achievements-tiers-colors'
import acknowledgementReceivedIcon from '../../assets/achievements-icons/acknowledgement-received.svg'
import acknowledgementSendIcon from '../../assets/achievements-icons/acknowledgement-send.svg'
import completedMissionsIcon from '../../assets/achievements-icons/completed-missions.svg'
import contactsIcon from '../../assets/achievements-icons/contacts.svg'
import createdMissionIcon from '../../assets/achievements-icons/created-missions.svg'
import messagesIcon from '../../assets/achievements-icons/messages.svg'
import loginIcon from '../../assets/achievements-icons/login.svg'
import './style.scss'

const achievementsIcons = {
    [achievementKeys.CONCLUDED_MISSION]: completedMissionsIcon,
    [achievementKeys.CREATED_MISSION]: createdMissionIcon,
    [achievementKeys.CONTACT]: contactsIcon,
    [achievementKeys.LOGIN]: loginIcon,
    [achievementKeys.MESSAGES]: messagesIcon,
    [achievementKeys.RECEIVED_ACKNOWLEDGEMENT]: acknowledgementReceivedIcon,
    [achievementKeys.SEND_ACKNOWLEDGEMENT]: acknowledgementSendIcon,
}

const Acknowledgement: React.FC<IComponentProps> = ({ title, description, _key, tier }) => (
    <div
        className="achievement"
        style={{
            backgroundColor: achievementsTiersColors[tier],
        }}
    >
        <button type="button" data-tip data-for={`achievement-description-${_key}-${tier}`}>
            <img alt="icon" src={achievementsIcons[_key]} />
        </button>
        {description
            ? (
                <ReactTooltip multiline className="tooltip" id={`achievement-description-${_key}-${tier}`}>
                    <p className="title">{title}</p>
                    <p className="text">{description}</p>
                </ReactTooltip>
            ) : ''}
    </div>
)

Acknowledgement.defaultProps = { }

export default Acknowledgement
