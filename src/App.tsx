import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import { UserProvider } from './context/UserProvider'
import { useEffect } from 'react'
import apiToken from './config/apiToken'

function App() {
    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
            apiToken({
                method: 'POST',
                data: {
                    grant_type: 'client_credentials',
                    client_id: 'dd6e6b29959240688a5d00434108e2e2',
                    client_secret: 'd86a41f1c6a744368a2a6c0524d9ac6c',
                },
            })
                .then(({ data: { access_token } }) => {
                    console.log('creating token', access_token)
                    localStorage.setItem('accessToken', access_token)
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            console.log('The token exist', token)
        }
    }, [])

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
