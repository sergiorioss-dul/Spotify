import Layout from '../components/Layout/Layout'
import { useUser } from '../hooks/useUser'

const Register = () => {
    const { handlerRegister } = useUser()
    return (
        <Layout title="💾 Register">
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-sm">
                    <form action="" className="rounded shadow-md px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <h1> Email:</h1>
                            <input
                                type="email"
                                className="backgroundInput shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <h1> Username:</h1>
                            <input
                                type="text"
                                className="backgroundInput shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <h1> Password:</h1>
                            <input
                                type="password"
                                className="backgroundInput shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <h1> Confirm:</h1>
                            <input
                                type="password"
                                className="backgroundInput shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <button
                            onClick={() =>
                                handlerRegister({
                                    email: 'dul@gmail.com',
                                    password: 'pass',
                                    name: 'dul',
                                })
                            }
                            type="button"
                            className="btn btn-outline-dark btn-lg"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Register
