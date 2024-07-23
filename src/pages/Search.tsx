import Layout from '../components/Layout/Layout'
import { useUser } from '../hooks/useUser'
import List from '../components/List/List'

interface IEvent {
    keyCode: string | number
    target: {
        value: string
    }
}

const Search = () => {
    const { searchSong, setUseTracks, tracks, _toggleFav } = useUser()

    const _searchSong = async (event: IEvent) => {
        if (event.keyCode === 'Enter' || event.keyCode === 13) {
            setUseTracks()
            const result = await searchSong(event.target.value)
            setUseTracks(result)
        }
    }

    return (
        <Layout title="🔎 Search">
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
            {tracks !== undefined && <List list={tracks} _toggleFav={_toggleFav} selected />}
        </Layout>
    )
}

export default Search
