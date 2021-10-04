import React from 'react'

interface IComponentProps {
    label: string,
    text: string,
    onTextClick?: () => void
    inverse?: boolean
}

export default IComponentProps
