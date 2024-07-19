import axios from 'axios'

const apiMusic = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
})

export default apiMusic
