import './App.css'
import { ImageAccordion } from './components/ImageAccordion/ImageAccordion'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
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
                    <ImageAccordion />
                </div>
            </div>
        </div>
    )
}

export default App
