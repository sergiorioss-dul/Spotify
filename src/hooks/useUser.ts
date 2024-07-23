import { useContext } from 'react'
import { UserContext, UserContextProps } from '../context/UserContext'

export const useUser = () => {
    const {
        searchSong,
        addTrack,
        removeTrack,
        userState,
        _toggleFav,
        setUseTracks,
        tracks,
        selected,
    } = useContext<UserContextProps>(UserContext)
    return {
        tracks,
        addTrack,
        userState,
        searchSong,
        removeTrack,
        _toggleFav,
        setUseTracks,
        selected,
    }
}
