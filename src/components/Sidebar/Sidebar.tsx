import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../Nav/Menu'
import { INav } from '../Nav/models'

const Sidebar = () => {
    const navGuest: INav[] = [
        {
            path: '/',
            _class: 'ai-heart',
            text: 'Favorites',
        },
        {
            path: '/login',
            _class: 'ai-person',
            text: 'Login',
        },
        {
            path: '/search',
            _class: 'ai-search',
            text: 'Search',
        },
        {
            path: '/plans',
            _class: 'ai-coin',
            text: 'Plans',
        },
        {
            path: '/support',
            _class: 'ai-envelope',
            text: 'Support',
        },
    ]
    return (
        <aside className="sidebar">
            <div className="header">
                <Link to="/">
                    <img className="imgHeader" src="./src/assets/spotify.png" />
                </Link>
                <h1>Welcome to myMusic</h1>
            </div>
            <Menu navLogin={navGuest} />
        </aside>
    )
}

export default Sidebar
