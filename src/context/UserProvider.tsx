import { useEffect, useReducer } from 'react'
import { userReducer } from './userReducer'
import { UserContext } from './UserContext'
import { IUser, IUserLogin } from './models'
import apiMusic from '../config/apiMusic'
import { IMusic } from '../pages/models'

const INITIAL_STATE = {
    name: '',
    password: '',
    email: '',
    favSongs: [],
    searchSongs: [],
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE)

    useEffect(() => {
        console.log('initial')
        const reloadToken = async () => {
            const accessToken = localStorage.getItem('accessToken')
            const r = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                },
            })
            const { error } = await r.json()
            if (error.message === 'The access token expired') {
                console.log('The token is expired')
            }
        }
        reloadToken()
    }, [])

    const handlerLogin = (user: IUserLogin) => {
        dispatch({
            payload: user,
            type: 'loginUser',
        })
    }

    const handlerRegister = (user: IUser) => {
        dispatch({
            payload: user,
            type: 'registerUser',
        })
    }

    const searchSong = async (word: string): Promise<IMusic> => {
        const response = await apiMusic({
            method: 'GET',
            url: `/search?q=${word}&type=track`,
        })
            .then(({ data }) => {
                return data
            })
            .catch((e) => {
                console.log('Error :(', e)
            })
        return response
    }

    return (
        <UserContext.Provider
            value={{
                userState,
                searchSong,
                handlerLogin,
                handlerRegister,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
