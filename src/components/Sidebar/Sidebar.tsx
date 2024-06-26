import { useState } from 'react'
import './styles.css'

const Sidebar = () => {
    const [loggIn, setLoggin] = useState<boolean>(false)
    return (
        <aside className="sidebar">
            <div className="header">
                {
                    loggIn ? <><img className="imgHeader" src="./src/assets/spotify.png" /><h1 className='m-2'>Hi ! Firstname</h1></>
                        : <><img className="imgHeader" src="./src/assets/spotify.png" />
                            <h1>Welcome to myMusic</h1></>
                }
            </div>
            {
                loggIn ? <nav>
                    <a>
                        <i className="ai-search"></i>
                        <p>Search</p>
                    </a>
                    <a>
                        <i className="ai-heart"></i>
                        <p>Favorite</p>
                    </a>
                    <a>
                        <i className="ai-envelope"></i>
                        <p>Support</p>
                    </a>
                    <a>
                        <i className="ai-gear"></i>
                        <p>Logout</p>
                    </a>
                </nav> :
                    <nav>
                        <a>
                            <i className="ai-person"></i>
                            <p>Log in</p>
                        </a>
                        <a>
                            <i className="ai-save"></i>
                            <p>Register</p>
                        </a>
                        <a>
                            <i className="ai-search"></i>
                            <p>Search</p>
                        </a>
                        <a>
                            <i className="ai-envelope"></i>
                            <p>Support</p>
                        </a>
                    </nav>
            }

        </aside>
    )
}

export default Sidebar