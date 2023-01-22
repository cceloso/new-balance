import { Link } from "react-router-dom"
import { products } from "../data"
import Container from "./Container"
import Product from "./Product"

const ProductList = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
        {products.map(item => (
          <Link to={`/products/${item.id}`}>
            <Product item={item} key={item.id} />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default ProductList