import utils from '../utils'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const serviceEndpoint = 'users'

const login: (data: {email: string, password: string}) =>
Promise<any> = ({ email, password }) => fetch(`${baseApiUrl}/${serviceEndpoint}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
})
    .then((res) => res.json())
    .catch((err) => utils.errorHandler(err))

const register: (data: {name: string, email: string, phone: string, password: string}) =>
Promise<any> = ({ name, email, phone, password }) => fetch(`${baseApiUrl}/${serviceEndpoint}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, password }),

})
    .then((res) => res.json())
    .catch((err) => utils.errorHandler(err))

export default { login, register }
