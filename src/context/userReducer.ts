import { Item } from '../pages/models'
import { IUser } from './models'

type UserAction =
    | { type: 'addTrack'; payload: Item }
    | { type: 'removeTrack'; payload: string }
    | { type: 'changePremiumUser'; payload: boolean }

export const userReducer = (state: IUser, action: UserAction): IUser => {
    switch (action.type) {
        case 'addTrack':
            state.favTracks?.push(action.payload)
            localStorage.setItem('favTracks', JSON.stringify(state.favTracks))
            return state
        case 'removeTrack': {
            const tracks = state.favTracks?.filter((t) => t.id !== action.payload)
            state.favTracks = tracks
            localStorage.setItem('favTracks', JSON.stringify(state.favTracks))
            return state
        }
        case 'changePremiumUser':
            state.isPremium = action.payload
            return state
        default:
            return state
    }
}
