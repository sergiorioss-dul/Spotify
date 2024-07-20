import { useEffect, useReducer } from 'react'
import { userReducer } from './userReducer'
import { UserContext } from './UserContext'
import { IUser, IUserLogin } from './models'
import apiMusic from '../config/apiMusic'
import { IMusic } from '../pages/models'
import { reloadToken } from '../hooks/useApi'

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
