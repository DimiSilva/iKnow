import React from 'react'

interface IComponentProps {
    label?: string,
    value: string,
    inputValue: string,
    options: Array<{value: string, label: string}>,
    onChange: (value: string) => void,
    onInputChange: (value: string) => void,
    invalidDataMessage?: string | undefined
}

export default IComponentProps
