import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import PromoBanner from '../components/PromoBanner'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar />
      <Hero />
      <Slider />
      <ProductList />
    </div>
  )
}

export default Home