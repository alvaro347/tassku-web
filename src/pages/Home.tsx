import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Pricing from '../components/Pricing/Pricing'
import DownloadCta from '../components/DownloadCta/DownloadCta'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <DownloadCta />
            <Footer />
        </>
    )
}

export default Home
