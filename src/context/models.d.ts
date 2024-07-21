import { Item } from '../pages/models'

export interface IUser {
    name: string
    email: string
    password: string
    favTracks?: Item[]
}
