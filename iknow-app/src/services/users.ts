import { AddToast } from 'react-toast-notifications'
import utils from '../utils'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const serviceEndpoint = 'users'

const login: (data: {email: string, password: string}, addToast: AddToast) =>
Promise<any> = ({ email, password }, addToast) => fetch(`${baseApiUrl}/${serviceEndpoint}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
})
    .then((res) => {
        if (res.status < 200 || res.status >= 300) return utils.errorHandler(res, addToast)
        return res.json()
    })
    .catch((err) => utils.errorHandler(err, addToast))

const register: (data: {name: string, email: string, phone: string, password: string}, addToast: AddToast) =>
Promise<any> = ({ name, email, phone, password }, addToast) => fetch(`${baseApiUrl}/${serviceEndpoint}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, password }),

})
    .then((res) => res.json())
    .catch((err) => utils.errorHandler(err, addToast))

export default { login, register }
