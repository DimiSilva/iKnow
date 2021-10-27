import common from '../../../common'

interface IComponentProps {
    onScrollEnd: () => void,
    loading?: boolean,
    users: Array<typeof common.dataModels.user>,
    view: (userId: string) => void
}

export default IComponentProps
