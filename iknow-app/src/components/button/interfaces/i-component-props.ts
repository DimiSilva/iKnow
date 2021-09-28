interface IComponentProps {
    text?: string,
    onClick: () => void,
    style?: React.CSSProperties,
    loading?: boolean,
    disabled?: boolean
}

export default IComponentProps
