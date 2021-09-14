import { AddToast } from 'react-toast-notifications'
import { errorsEnum, errorsMasksEnum } from 'iknow-common/enums'

const errorHandler: (res: any, addToast: AddToast) => Promise<void> = async (res, addToast) => {
    const resData = res.json ? await res.json() : {}
    const error = resData.error || errorsEnum.INTERNAL_ERROR
    const errorMask = !errorsMasksEnum[error]
        ? res.status === 400
            ? 'Dados inválidos'
            : errorsMasksEnum[errorsEnum.INTERNAL_ERROR]
        : errorsMasksEnum[error]

    addToast(errorMask, { autoDismiss: true, appearance: 'error' })
}

export default errorHandler
