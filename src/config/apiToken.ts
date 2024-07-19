import axios from 'axios'

const apiToken = axios.create({
    baseURL: 'https://accounts.spotify.com/api/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})

export default apiToken
