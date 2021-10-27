import React from 'react'

interface IComponentProps {
    label?: string,
    value: string,
    onChange: (value: string) => void,
    maxLength?: number,
    invalidDataMessage?: string | undefined,
    onEnterPress?: () => void
}

export default IComponentProps
