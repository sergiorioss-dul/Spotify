import { useEffect, useState } from 'react'
import { ImageAccordion } from '../components/ImageAccordion/ImageAccordion'
import Layout from '../components/Layout/Layout'
import { ScaleLoader } from 'react-spinners'

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    return (
        <Layout>
            {
                loading ? <ScaleLoader /> : <ImageAccordion />
            }
        </Layout>
    )
}

export default Home
