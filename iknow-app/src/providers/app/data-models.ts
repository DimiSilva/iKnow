const context: {
    navigateTo: (path: string) => void,
    currentPageTitle: string,
    currentPathName: string
} = {
    navigateTo: (path) => undefined,
    currentPageTitle: '',
    currentPathName: '',
}

export default { context }
