import './style.scss'

import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'
import variables from '../../theme/variables'

const LabelText: React.FC<IComponentProps> = ({ label, text }) => (
    <div className="label-text">
        <div className="label-text-label-container">
            <h3>{label}</h3>
        </div>
        <div className="label-text-text-container">
            <p>{text}</p>
        </div>
    </div>
)

LabelText.defaultProps = { }

export default LabelText
