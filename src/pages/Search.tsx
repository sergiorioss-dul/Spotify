import Layout from '../components/Layout/Layout'
import { useUser } from '../hooks/useUser'

type GenericObject = Record<string, unknown>

const Search = () => {
    const { searchSong } = useUser()

    const _searchSong = (e: GenericObject) => {
        if (e.keyCode === 'Enter' || e.keyCode === 13) {
            searchSong(e.target.value)
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
        </Layout>
    )
}

export default Search
