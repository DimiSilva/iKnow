import React from 'react'

interface IComponentProps {
    label?: string,
    value: string,
    onChange: (value: string) => void,
    maxLength?: number,
    type?: string
}

export default IComponentProps
