import { FC } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { LayoutProps } from './models'

const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (
        <div className="container">
            <div className="row position-absolute top-0 w-100 navColor z-2">
                <h1>{title}</h1>
            </div>
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">{children}</div>
            </div>
        </div>
    )
}

export default Layout
