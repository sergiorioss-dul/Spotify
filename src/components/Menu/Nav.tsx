import { FC } from 'react'
import { Link } from 'react-router-dom'
import { INav } from './models'

const Nav: FC<INav> = ({ path, _class, text }) => (
    <Link to={path}>
        <i className={_class}></i>
        <p>{text}</p>
    </Link>
)

export default Nav
