import Layout from '../components/Layout/Layout'
import { useUser } from '../hooks/useUser'
import List from '../components/List/List'
import { ToastContainer } from 'react-toastify'
import { Item } from './models'
import { notify } from '../utils'

interface IEvent {
    keyCode: string | number
    target: {
        value: string
    }
}

const Search = () => {
    const { searchSong, setUseTracks, tracks, _toggleFav, userState } = useUser()

    const _searchSong = async (event: IEvent) => {
        if (event.keyCode === 'Enter' || event.keyCode === 13) {
            setUseTracks()
            const result = await searchSong(event.target.value)
            setUseTracks(result)
        }
    }

    const toogleFav = (track: Item) => {
        if (userState.favTracks && userState.favTracks?.length > 8) {
            notify('⚠️ Please update your membership!', 'error')
        } else {
            _toggleFav(track)
        }
    }

    return (
        <Layout title="🔎 Search">
            <ToastContainer />
            <div
                className="input-group input-group-lg position-absolute w-75"
                style={{ top: '100px', left: '200px' }}
            >
                <span className="input-group-text backgroundInput">🔎</span>
                <input
                    type="text"
                    className="form-control backgroundInput"
                    onKeyDown={_searchSong}
                />
            </div>
            {tracks !== undefined && <List list={tracks} _toggleFav={toogleFav} selected />}
        </Layout>
    )
}

export default Search
