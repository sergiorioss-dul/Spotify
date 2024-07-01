import { ISong, IUser, IUserLogin } from './models'

type UserAction =
    | { type: 'registerUser'; payload: IUser }
    | { type: 'addSong'; payload: ISong }
    | { type: 'loginUser'; payload: IUserLogin }
    | { type: 'searchSong'; payload: string }

export const userReducer = (state: IUser, action: UserAction) => {
    switch (action.type) {
        case 'registerUser':
            console.log('creating user...')
            return state
        case 'addSong':
            console.log('adding song...')
            return state
        case 'loginUser':
            console.log('loggin user...')
            return state
        case 'searchSong':
            console.log('search song...', action.payload)
            return state
        default:
            return state
    }
}
