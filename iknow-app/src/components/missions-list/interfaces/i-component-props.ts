import common from '../../../common'

interface IComponentProps {
    onScrollEnd: () => void,
    loading?: boolean,
    missions: Array<typeof common.dataModels.mission>,
    view: (mission: typeof common.dataModels.mission) => void
    onAuthorClick: (Function) | ((ownerId: string) => void)
}

export default IComponentProps
