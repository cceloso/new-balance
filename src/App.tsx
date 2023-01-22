import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PromoBanner from "./components/PromoBanner"
import ScrollToTop from "./components/ScrollToTop"
import SignUpBanner from "./components/SignUpBanner"
import Home from "./pages/Home"
import Product from "./pages/Products/Product"

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <PromoBanner />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
      <SignUpBanner />
      <Footer />
    </HashRouter>
  )
}

export default App
