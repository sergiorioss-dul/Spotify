import { useEffect, useState } from 'react'
import { ImageAccordion } from '../components/ImageAccordion/ImageAccordion'
import Layout from '../components/Layout/Layout'
import { ScaleLoader } from 'react-spinners'

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return <Layout title="♡ Favorites">{loading ? <ScaleLoader /> : <ImageAccordion />}</Layout>
}

export default Home
