import { useEffect, useReducer, useState } from 'react'
import { userReducer } from './userReducer'
import { UserContext } from './UserContext'
import apiMusic from '../config/apiMusic'
import { IMusic, Item, Tracks } from '../pages/models'
import { reloadToken } from '../hooks/useApi'
import { IUser } from './models'
import { notify } from '../utils'
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

const localUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') ?? '')
    : null

const INITIAL_STATE = {
    name: localUser ? localUser.name : '',
    password: localUser ? localUser.password : '',
    email: localUser ? localUser.email : '',
    favTracks: JSON.parse(localStorage.getItem('favTracks') ?? '[]'),
    isPremium: false,
}

const FAKE_DB: IUser[] = [
    {
        name: 'Testing',
        password: '$2a$10$CwTycUXWue0Thq9StjUM0uuu.eenRVFBCuKHpl3KSYOHe5osN7amm',
        email: 'testing@gmail.com',
    },
]

interface props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const [tracks, setUseTracks] = useState<Tracks | void>()
    const [selected, setSelected] = useState<boolean>(false)
    const [listTracks, setListTrack] = useState(tracks)
    const navigate = useNavigate()

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

    const changeProgramUser = (isPremium: boolean) => {
        dispatch({
            payload: isPremium,
            type: 'changePremiumUser',
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

    const _toggleFav = (track: Item) => {
        setSelected(!selected)
        if (track.selected) {
            track.selected = false
            removeTrack(track.id)
        } else {
            addTrack(track)
            track.selected = true
        }
        if (listTracks) {
            const foundIndex = listTracks.items.findIndex((x) => x.id == track.id)
            listTracks.items[foundIndex] = track
            setListTrack(listTracks)
        }
    }

    const handlerLogin = (user: IUser) => {
        const findUser = FAKE_DB.find((u) => user.email === u.email)
        if (findUser) {
            if (bcrypt.compareSync(user.password, findUser.password)) {
                notify(`Welcome ${findUser.name}`, 'success')
                localStorage.setItem('user', JSON.stringify(findUser))
                setTimeout(() => {
                    navigate('/')
                }, 1900)
            } else {
                notify('⚠️ Anauthorized 401', 'error')
            }
        } else {
            notify('⚠️ Not Found', 'error')
        }
    }

    return (
        <UserContext.Provider
            value={{
                tracks,
                selected,
                addTrack,
                userState,
                searchSong,
                _toggleFav,
                removeTrack,
                setUseTracks,
                handlerLogin,
                changeProgramUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
