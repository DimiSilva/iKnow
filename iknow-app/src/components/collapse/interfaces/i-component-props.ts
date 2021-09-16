import React from 'react'
import IDefaultIconProps from '../../icons/interfaces/i-default-icon-props'

interface IComponentProps {
    title?: string,
    style?: React.CSSProperties,
    info?: string
    action?: {
        icon: React.FC<IDefaultIconProps>,
        onClick: () => void
    }
}

export default IComponentProps
