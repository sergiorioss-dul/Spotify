import './App.css'
import { ImageAccordion } from './components/ImageAccordion/ImageAccordion'

function App() {
    return (
        <div className='container'>
            <h1>myMusic</h1>
            <div className="row">
                <div className="col">
                    <h1>myMusic</h1>
                </div>
                <div className="col">
                    <ImageAccordion />
                </div>
            </div>
        </div>
    )
}

export default App
