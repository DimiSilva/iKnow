import { AddToast } from 'react-toast-notifications'
import { constructQueryString } from 'iknow-common/utils'
import utils from '../utils'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const serviceEndpoint = 'acknowledgements'

const getAll: (
    token: string,
    data: {
        page?: number,
        perPage?: number,
    },
    addToast: AddToast
) => Promise<any> = (
    token,
    data,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}${constructQueryString(data)}`,
    'GET',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

export default { getAll }
