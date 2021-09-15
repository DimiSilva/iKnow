import { AddToast } from 'react-toast-notifications'
import utils from './index'

const httpRequest: (url: string, method: string, data: object, addToast: AddToast) => Promise<any> = (url, method, data, addToast) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),

})
    .then((res) => {
        console.log(res.status)
        if (res.status < 200 || res.status >= 300) return utils.errorHandler(res, addToast)
        return res.json()
    })
    .catch((err) => utils.errorHandler(err, addToast))

export default httpRequest
