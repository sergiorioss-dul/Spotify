import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useUser } from '../hooks/useUser'
import { Tracks } from './models'
import List from '../components/List/List'

interface IEvent {
    keyCode: string | number
    target: {
        value: string
    }
}

const Search = () => {
    const [tracks, setUseTracks] = useState<Tracks | void>()
    const { searchSong } = useUser()

    const _searchSong = async (event: IEvent) => {
        if (event.keyCode === 'Enter' || event.keyCode === 13) {
            console.log('executed')
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
            {tracks !== undefined && <List tracks={tracks} />}
        </Layout>
    )
}

export default Search
