import Layout from '../components/Layout/Layout'

const Search = () => {
    return (
        <Layout title="🔎 Search">
            <div
                className="input-group input-group-lg position-absolute w-75"
                style={{ top: '100px', left: '150px' }}
            >
                <span className="input-group-text backgroundInput">🔎</span>
                <input type="text" className="form-control backgroundInput" />
            </div>
        </Layout>
    )
}

export default Search
