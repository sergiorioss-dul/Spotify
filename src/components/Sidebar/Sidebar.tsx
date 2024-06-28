import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import { INav } from '../Menu/models'

const Sidebar = () => {
    const navLogin: INav[] = [
        {
            path: '/',
            _class: 'ai-heart',
            text: 'Favorites',
        },
        {
            path: '/search',
            _class: 'ai-search',
            text: 'Search',
        },
        {
            path: '/support',
            _class: 'ai-envelope',
            text: 'Favorites',
        },
    ]
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
            path: '/register',
            _class: 'ai-save',
            text: 'Register',
        },
        {
            path: '/search',
            _class: 'ai-search',
            text: 'Search',
        },
        {
            path: '/support',
            _class: 'ai-envelope',
            text: 'Support',
        },
    ]
    const [loggIn, setLoggin] = useState<boolean>(false)
    return (
        <aside className="sidebar">
            <div className="header">
                {loggIn ? (
                    <>
                        <img className="imgHeader" src="./src/assets/spotify.png" />
                        <h1 className="m-2">Hi ! Firstname</h1>
                    </>
                ) : (
                    <>
                        <Link to="/">
                            <img className="imgHeader" src="./src/assets/spotify.png" />
                        </Link>
                        <h1>Welcome to myMusic</h1>
                    </>
                )}
            </div>
            {loggIn ? <Menu {...{ setLoggin, navLogin }} /> : <Menu navLogin={navGuest} />}
        </aside>
    )
}

export default Sidebar
