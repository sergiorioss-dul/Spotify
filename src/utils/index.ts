import { TypeOptions, toast } from 'react-toastify'

export const notify = (message: string, type: TypeOptions) =>
    toast.success(message, {
        position: 'top-right',
        type,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    })
