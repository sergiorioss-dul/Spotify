import { Item } from '../pages/models'
import { IUser } from './models'

type UserAction = { type: 'addTrack'; payload: Item } | { type: 'removeTrack'; payload: string }

export const userReducer = (state: IUser, action: UserAction): IUser => {
    switch (action.type) {
        case 'addTrack':
            console.log('adding song...', action.payload)
            state.favTracks?.push(action.payload)
            return state
        case 'removeTrack':
            console.log('removing song...', action.payload)
            return state

        default:
            return state
    }
}
