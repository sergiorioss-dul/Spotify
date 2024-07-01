import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import { UserProvider } from './context/UserProvider'

function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/support" element={<Support />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </UserProvider>
    )
}

export default App
