import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import PromoBanner from '../components/PromoBanner'
import SignUpBanner from '../components/SignUpBanner'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <Hero />
      <Slider />
      <div className='flex flex-col items-center mb-8 py-6'>
        <span className='font-semibold text-5xl md:text-6xl font-hero-heading'>IU-Selection</span>
      </div>
      <ProductList />
      <SignUpBanner />
      <Footer />
    </>
  )
}

export default Home