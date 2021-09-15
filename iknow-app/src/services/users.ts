import { AddToast } from 'react-toast-notifications'
import utils from '../utils'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const serviceEndpoint = 'users'

const login: (
    data: {email: string, password: string},
    addToast: AddToast
) => Promise<any> = (
    { email, password },
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/login`,
    'POST',
    { email, password },
    addToast,
)

const register: (
    data: {name: string, email: string, phone: string, password: string},
    addToast: AddToast
) => Promise<any> = (
    { name, email, phone, password },
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/register`,
    'POST',
    { name, email, phone, password },
    addToast,
)

export default { login, register }
