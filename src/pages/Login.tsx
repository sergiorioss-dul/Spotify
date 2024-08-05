import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useUser } from '../hooks/useUser'
import { IUser } from '../context/models'
import { ToastContainer } from 'react-toastify'

const Login = () => {
    const { handlerLogin } = useUser()
    const [user, setUser] = useState<IUser>({
        name: '',
        email: '',
        password: '',
    })

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <Layout title="👤 Login">
            <ToastContainer />
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-sm">
                    <form action="" className="rounded shadow-md px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <h1> User:</h1>
                            <input
                                required
                                onChange={(e) => _onChange(e)}
                                name="name"
                                type="text"
                                className="backgroundInput shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <h1> Email:</h1>
                            <input
                                required
                                onChange={(e) => _onChange(e)}
                                name="email"
                                type="email"
                                className="backgroundInput shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <h1> Password:</h1>
                            <input
                                required
                                onChange={(e) => _onChange(e)}
                                name="password"
                                type="password"
                                className="backgroundInput shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-lg"
                            onClick={() => handlerLogin(user)}
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login
