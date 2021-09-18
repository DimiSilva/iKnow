import { AddToast } from 'react-toast-notifications'
import utils from './index'

const httpRequest: (
    url: string,
    method: string,
    data: object | undefined,
    headers: object | undefined,
    addToast: AddToast
) => Promise<any> = (url, method, data, headers, addToast) => fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...(headers || {}) },
    ...(data ? { body: JSON.stringify(data) } : {}),
})
    .then((res) => {
        if (res.status < 200 || res.status >= 300) return utils.errorHandler(res, addToast)
        return res.json()
    })
    .catch((err) => utils.errorHandler(err, addToast))

export default httpRequest
