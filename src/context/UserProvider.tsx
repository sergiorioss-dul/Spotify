import { useReducer } from 'react'
import { userReducer } from './userReducer'
import { UserContext } from './UserContext'
import { IUser, IUserLogin } from './models'

const INITIAL_STATE = {
    name: '',
    password: '',
    email: '',
    favSongs: [],
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE)

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

    const searchSong = (word: string) => {
        dispatch({
            payload: word,
            type: 'searchSong',
        })
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
