import { createContext } from 'react'
import { IUser, IUserLogin } from './models'

export interface UserContextProps {
    userState: IUser
    searchSong: (word: string) => void
    handlerLogin: (user: IUserLogin) => void
    handlerRegister: (user: IUser) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)
