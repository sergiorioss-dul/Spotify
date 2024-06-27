import { FC } from "react"
import Sidebar from "../Sidebar/Sidebar"
import { LayoutProps } from "./models"

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className='container'>
            <div className='row position-absolute top-0 w-100 navColor z-2'>
                <p>GREAT</p>
            </div>
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout