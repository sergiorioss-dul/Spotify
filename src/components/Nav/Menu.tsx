import { FC } from 'react'
import Nav from './Nav'
import { IMenu, INav } from './models'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Menu: FC<IMenu> = ({ navLogin, isLogin }) => {
    const navigate = useNavigate()

    const _onClick = () => {
        Swal.fire({
            title: 'Are you sure you want to close session?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('user')
                Swal.fire({
                    title: 'See you later!',
                    icon: 'success',
                })
                navigate(0)
            }
        })
    }
    return (
        <nav>
            {navLogin.map(({ path, _class, text }: INav) => {
                if (isLogin && path === '/login') return
                return <Nav key={path} {...{ path, _class, text }} />
            })}
            {isLogin && (
                <a onClick={_onClick}>
                    <i className="ai-gear"></i>
                    <p>Logout</p>
                </a>
            )}
        </nav>
    )
}
export default Menu
