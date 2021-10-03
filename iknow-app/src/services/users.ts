import { constructQueryString } from 'iknow-common/utils'
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
    undefined,
    addToast,
)

const loginSignal: (
    token: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/login-signal`,
    'POST',
    undefined,
    { Authorization: `Bearer ${token}` },
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
    undefined,
    addToast,
)

const getMyProfileData: (
    token: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/my-profile-data`,
    'GET',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const getProfileData: (
    token: string,
    userId: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    userId,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/profile-data/${userId}`,
    'GET',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const get: (
    token: string,
    data: {search?: string},
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

const updateMyProfileData: (
    token: string,
    data: { name?: string, phone?: string, whoIAm?: string, whatDoIDo?: string, myInterests?: string },
    addToast: AddToast
) => Promise<any> = (
    token,
    data,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/my-profile-data`,
    'PUT',
    data,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const addContact: (
    token: string,
    data: { userId: string },
    addToast: AddToast
) => Promise<any> = (
    token,
    data,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/add-contact`,
    'PUT',
    data,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const removeContact: (
    token: string,
    data: { userId: string },
    addToast: AddToast
) => Promise<any> = (
    token,
    data,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/remove-contact`,
    'PUT',
    data,
    { Authorization: `Bearer ${token}` },
    addToast,
)

export default { login, loginSignal, register, getMyProfileData, getProfileData, get, updateMyProfileData, addContact, removeContact }
