import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const useUser = () => {
    const { handlerLogin, handlerRegister, searchSong } = useContext(UserContext)
    return {
        searchSong,
        handlerLogin,
        handlerRegister,
    }
}
