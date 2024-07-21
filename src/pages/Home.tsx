import { useEffect, useState } from 'react'
import { ImageAccordion } from '../components/ImageAccordion/ImageAccordion'
import Layout from '../components/Layout/Layout'
import { ScaleLoader } from 'react-spinners'
import { useUser } from '../hooks/useUser'

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const { userState } = useUser()
    console.log(userState)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <Layout title="♡ Favorites">
            {loading ? <ScaleLoader /> : <ImageAccordion favTracks={userState?.favTracks} />}
        </Layout>
    )
}

export default Home
