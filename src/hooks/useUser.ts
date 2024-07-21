import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const useUser = () => {
    const { searchSong, addTrack, removeTrack, userState } = useContext(UserContext)
    return {
        addTrack,
        userState,
        searchSong,
        removeTrack,
    }
}
