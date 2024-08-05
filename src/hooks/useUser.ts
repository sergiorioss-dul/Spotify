import { useContext } from 'react'
import { UserContext, UserContextProps } from '../context/UserContext'

export const useUser = () => {
    const {
        tracks,
        selected,
        addTrack,
        userState,
        _toggleFav,
        searchSong,
        removeTrack,
        handlerLogin,
        setUseTracks,
    } = useContext<UserContextProps>(UserContext)
    return {
        tracks,
        addTrack,
        selected,
        userState,
        searchSong,
        _toggleFav,
        removeTrack,
        setUseTracks,
        handlerLogin,
    }
}
