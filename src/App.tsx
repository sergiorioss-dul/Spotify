import './App.css'
import { ImageAccordion } from './components/ImageAccordion/ImageAccordion'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1 className='mb-5 text-secondary'>myMusic</h1>
                </div>
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
