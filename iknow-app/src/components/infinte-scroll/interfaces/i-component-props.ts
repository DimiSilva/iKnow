interface IComponentProps {
    onScrollEnd: () => void,
    loading?: boolean,
    inverse?: boolean,
    emptyMessage: string,
    scrollToBottomOnUpdate?: boolean
}

export default IComponentProps
