import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [loggIn, setLoggin] = useState<boolean>(false)
    return (
        <aside className="sidebar">
            <div className="header">
                {
                    loggIn ? <><img className="imgHeader" src="./src/assets/spotify.png" /><h1 className='m-2'>Hi ! Firstname</h1></>
                        : <><Link to="/" ><img className="imgHeader" src="./src/assets/spotify.png" /></Link>
                            <h1>Welcome to myMusic</h1></>
                }
            </div>
            {
                loggIn ? <nav>
                    <Link to="/">
                        <i className="ai-heart"></i>
                        <p>Favorites</p>
                    </Link>
                    <a>
                        <i className="ai-search"></i>
                        <p>Search</p>
                    </a>
                    <a>
                        <i className="ai-heart"></i>
                        <p>Favorite</p>
                    </a>
                    <Link to="/support">
                        <i className="ai-envelope"></i>
                        <p>Support</p>
                    </Link>
                    <a>
                        <i className="ai-gear"></i>
                        <p>Logout</p>
                    </a>
                </nav> :
                    <nav>
                        <Link to="/">
                            <i className="ai-heart"></i>
                            <p>Favorites</p>
                        </Link>
                        <Link to="/login">
                            <i className="ai-person"></i>
                            <p>Log in</p>
                        </Link>
                        <Link to="/register">
                            <i className="ai-save"></i>
                            <p>Register</p>
                        </Link>
                        <Link to="/search">
                            <i className="ai-search"></i>
                            <p>Search</p>
                        </Link>
                        <Link to="/support">
                            <i className="ai-envelope"></i>
                            <p>Support</p>
                        </Link>
                    </nav>
            }

        </aside>
    )
}

export default Sidebar