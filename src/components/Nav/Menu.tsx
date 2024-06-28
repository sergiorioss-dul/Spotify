import { FC } from 'react'
import Nav from './Nav'
import { IMenu, INav } from './models'

const Menu: FC<IMenu> = ({ setLoggin, navLogin }) => (
    <nav>
        {navLogin.map(({ path, _class, text }: INav) => (
            <Nav {...{ path, _class, text }} />
        ))}
        {setLoggin && (
            <a onClick={() => setLoggin(false)}>
                <i className="ai-gear"></i>
                <p>Logout</p>
            </a>
        )}
    </nav>
)

export default Menu
