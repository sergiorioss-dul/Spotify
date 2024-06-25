import './styles.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="header">
                <img src="https://w7.pngwing.com/pngs/543/1020/png-transparent-spotify-computer-icons-music-jenoti-logo-symbol-spotify-logo.png" />
                <h1>Violet AI</h1>
            </div>
            <nav>
                <a>
                    <i className="ai-search"></i>
                    <p>Search</p>
                </a>
                <a>
                    <i className="ai-home"></i>
                    <p>Home</p>
                </a>
                <a>
                    <i className="ai-folder"></i>
                    <p>Projects</p>
                </a>
                <a>
                    <i className="ai-dashboard"></i>
                    <p>Dashboard</p>
                </a>
                <a>
                    <i className="ai-person"></i>
                    <p>Team</p>
                </a>
                <a>
                    <i className="ai-envelope"></i>
                    <p>Support</p>
                </a>
                <a>
                    <i className="ai-gear"></i>
                    <p>Settings</p>
                </a>
            </nav>
        </aside>
    )
}

export default Sidebar