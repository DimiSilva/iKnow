const context: {
    navigateTo: (path: string, shouldSetBackPath?: boolean) => void,
    currentPageTitle: string,
    currentPathName: string,
    setCurrentPageTitle: (title: string) => void,
    backPath: string | undefined,
} = {
    navigateTo: (path, shouldSetBackPath) => undefined,
    currentPageTitle: '',
    currentPathName: '',
    setCurrentPageTitle: (title) => undefined,
    backPath: undefined,
}

export default { context }
