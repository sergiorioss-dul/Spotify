import { createContext } from 'react'
import { IUser } from './models'
import { Item } from '../pages/models'

export interface UserContextProps {
    userState: IUser
    searchSong: (word: string) => void
    addTrack: (track: Item) => void
    removeTrack: (id: string) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)
