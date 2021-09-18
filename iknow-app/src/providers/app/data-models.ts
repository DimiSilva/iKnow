const context: {
    navigateTo: (path: string) => void,
    currentPageTitle: string,
    currentPathName: string,
    setCurrentPageTitle: (title: string) => void,
    backPath: string | undefined,
    setBackPath: (backPath: string) => void
} = {
    navigateTo: (path) => undefined,
    currentPageTitle: '',
    currentPathName: '',
    setCurrentPageTitle: (title) => undefined,
    backPath: undefined,
    setBackPath: (backPath: string) => undefined,
}

export default { context }
