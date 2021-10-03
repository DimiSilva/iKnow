/* eslint-disable max-len */
import { acknowledgementTypes } from 'iknow-common/enums'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import acknowledgementsColors from '../../theme/acknowledgements-colors'
import charismaticIcon from '../../assets/acknowledgement-icons/charismatic.svg'
import efficientIcon from '../../assets/acknowledgement-icons/efficient.svg'
import goodMasterIcon from '../../assets/acknowledgement-icons/good-master.svg'
import patientIcon from '../../assets/acknowledgement-icons/patient.svg'
import supportiveIcon from '../../assets/acknowledgement-icons/supportive.svg'
import wiseIcon from '../../assets/acknowledgement-icons/wise.svg'
import './style.scss'
import variables from '../../theme/variables'

const acknowledgementIcons = {
    [acknowledgementTypes.CHARISMATIC]: charismaticIcon,
    [acknowledgementTypes.EFFICIENT]: efficientIcon,
    [acknowledgementTypes.GOOD_MASTER]: goodMasterIcon,
    [acknowledgementTypes.PATIENT]: patientIcon,
    [acknowledgementTypes.SUPPORTIVE]: supportiveIcon,
    [acknowledgementTypes.WISE]: wiseIcon,
}

const Acknowledgement: React.FC<IComponentProps> = ({ type, title, description, onClick, isSelected }) => (
    <div
        className="acknowledgement"
        style={{
            backgroundColor: acknowledgementsColors[type],
            border: isSelected ? `1px solid ${variables.quaternaryColor}` : 'none',
        }}
    >
        <button type="button" onClick={() => onClick && onClick()} data-tip data-for={`acknowledgement-description-${type}`}>
            <img alt="icon" src={acknowledgementIcons[type]} />
        </button>
        {description
            ? (
                <ReactTooltip multiline className="tooltip" id={`acknowledgement-description-${type}`}>
                    <p className="title">{title}</p>
                    <p className="text">{description}</p>
                </ReactTooltip>
            ) : ''}
    </div>
)

Acknowledgement.defaultProps = { description: undefined, onClick: undefined, isSelected: false }

export default Acknowledgement
