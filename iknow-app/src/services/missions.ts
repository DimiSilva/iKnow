import { AddToast } from 'react-toast-notifications'
import { constructQueryString } from 'iknow-common/utils'
import utils from '../utils'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const serviceEndpoint = 'missions'

const create: (
    token: string,
    data: { title: string, category: string, description: string },
    addToast: AddToast
) => Promise<any> = (
    token,
    data,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}`,
    'POST',
    data,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const accept: (
    token: string,
    missionId: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    missionId,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/accept/${missionId}`,
    'PUT',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const unbind: (
    token: string,
    missionId: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    missionId,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/unbind/${missionId}`,
    'PUT',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const giveUp: (
    token: string,
    missionId: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    missionId,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/give-up/${missionId}`,
    'PUT',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const cancel: (
    token: string,
    missionId: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    missionId,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/cancel/${missionId}`,
    'PUT',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const complete: (
    token: string,
    missionId: string,
    data: { evaluation?: number, acknowledgement?: string},
    addToast: AddToast
) => Promise<any> = (
    token,
    missionId,
    data,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/complete/${missionId}`,
    'PUT',
    data,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const getAll: (
    token: string,
    data: { search?: string, category?: string, status?: string, page?: number, perPage?: number, notBringMine?: boolean},
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

const getOne: (
    token: string,
    id: string,
    addToast: AddToast
) => Promise<any> = (
    token,
    id,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/${id}`,
    'GET',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

const getMine: (
    token: string,
    data: { search?: string, category?: string, status?: string, page?: number, perPage?: number},
    addToast: AddToast
) => Promise<any> = (
    token,
    data,
    addToast,
) => utils.httpRequest(
    `${baseApiUrl}/${serviceEndpoint}/my${constructQueryString(data)}`,
    'GET',
    undefined,
    { Authorization: `Bearer ${token}` },
    addToast,
)

export default { create, accept, cancel, complete, getAll, getMine, getOne, unbind, giveUp }
