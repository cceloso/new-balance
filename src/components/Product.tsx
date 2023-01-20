import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Icon from "./Icon";
import Link from "./Link"

interface IProductProps {
  item: Product;
  key: string;
}

const Product = (props: IProductProps) => {
  const product = props.item

  return (
    <div className='flex flex-col'>
      <div className='relative flex items-center justify-center group'>
        <img className='cursor-pointer transition duration-300 group-hover:opacity-50' src={product.images[0]} />
        <div className='flex items-center justify-center absolute opacity-0 transition duration-300 group-hover:opacity-100'>
          <Icon>
            <ShoppingCartIcon className='w-6 text-white' />
          </Icon>
          <Icon>
            <HeartIcon className='w-6 text-white' />
          </Icon>
        </div>
      </div>
      <div className='flex items-center justify-between font-bold'>
        <Link text={product.name} />
        <span>S${product.price}</span>
      </div>
      <span className='text-sm'>{product.categories[0]}</span>
    </div>
  )
}

export default Product