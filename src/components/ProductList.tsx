import { products } from "../data"
import Container from "./Container"
import Product from "./Product"

const ProductList = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </Container>
  )
}

export default ProductList