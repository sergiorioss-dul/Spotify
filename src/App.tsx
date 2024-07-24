import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import Login from './pages/Login'
import Search from './pages/Search'
import { UserProvider } from './context/UserProvider'
import { useEffect } from 'react'
import { createToken, reloadToken } from './hooks/useApi'
import Plans from './pages/Plans'

function App() {
    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
            createToken()
        } else {
            reloadToken()
        }
    }, [])

    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/support" element={<Support />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/plans" element={<Plans />} />
            </Routes>
        </UserProvider>
    )
}

export default App
