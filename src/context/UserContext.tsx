import { createContext } from 'react'
import { IUser } from './models'
import { Item, Tracks } from '../pages/models'

export interface UserContextProps {
    userState: IUser
    searchSong: (word: string) => void
    addTrack: (track: Item) => void
    removeTrack: (id: string) => void
    _toggleFav: (track: Item) => void
    setUseTracks: (tracks: Tracks | void) => void
    tracks?: Tracks | void
    selected: boolean
    changeProgramUser: (isPremium: boolean) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)
