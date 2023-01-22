import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PromoBanner from "./components/PromoBanner"
import SignUpBanner from "./components/SignUpBanner"
import Home from "./pages/Home"
import Product from "./pages/Product"

function App() {
  return (
    <>
      <PromoBanner />
      <Navbar />     
      {/* <Home />  */}
      <Product />
      <SignUpBanner />
      <Footer />
    </>
  )
}

export default App
