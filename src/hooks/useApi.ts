import axios from 'axios'
import apiToken from '../config/apiToken'

export const createToken = async () => {
    await apiToken({
        method: 'POST',
        data: {
            grant_type: 'client_credentials',
            client_id: 'dd6e6b29959240688a5d00434108e2e2',
            client_secret: 'd86a41f1c6a744368a2a6c0524d9ac6c',
        },
    })
        .then(({ data: { access_token } }) => {
            localStorage.setItem('accessToken', access_token)
        })
        .catch((e) => {
            console.log(e)
        })
}

export const reloadToken = async () => {
    const accessToken = localStorage.getItem('accessToken')
    await axios
        .get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then(() => {
            return
        })
        .catch((e) => {
            if (e.response.data.error.message === 'The access token expired') {
                localStorage.removeItem('accessToken')
                createToken()
            }
        })
}
