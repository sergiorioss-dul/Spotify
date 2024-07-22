import { useEffect, useReducer } from 'react'
import { userReducer } from './userReducer'
import { UserContext } from './UserContext'
import apiMusic from '../config/apiMusic'
import { IMusic, Item } from '../pages/models'
import { reloadToken } from '../hooks/useApi'

const INITIAL_STATE = {
    name: '',
    password: '',
    email: '',
    favTracks: JSON.parse(localStorage.getItem('favTracks') ?? '[]'),
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE)

    useEffect(() => {
        reloadToken()
    }, [])

    const addTrack = (track: Item) => {
        dispatch({
            payload: track,
            type: 'addTrack',
        })
    }

    const removeTrack = (id: string) => {
        dispatch({
            payload: id,
            type: 'removeTrack',
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
                addTrack,
                removeTrack,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
