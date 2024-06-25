import './App.css'
import { ImageAccordion } from './components/ImageAccordion/ImageAccordion'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
    return (
        <div className='container'>
            <h1>myMusic</h1>
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
