import Button from '../components/Button'
import Container from '../components/Container'
import Size from '../components/Size'
import { products, sizes } from '../data'
import { HeartIcon } from "@heroicons/react/24/outline"

const Product = () => {
  return (
    <Container styles='my-6'>
      <div className='grid grid-cols-5'>
        <div className='col-span-3 grid grid-cols-2 gap-6 mr-6'>
          {products[0].images.map((image, index) => (
            <img src={image} alt='' key={index} />
          ))}
        </div>
        <div className='col-span-2 ml-6 flex flex-col w-[70%]'>
          <span className='text-sm'>{products[0].categories[0]}</span>
          <span className='text-4xl font-semibold my-1'>{products[0].name}</span>
          <span className='font-bold'>S${products[0].price}</span>
          <div className='mt-4'>
            <span className='text-sm font-semibold mr-1'>Color:</span>
            <span className='text-sm'>{products[0].color}</span>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <span className='font-semibold mr-1'>Select Unisex Size</span>
            <span className='text-sm font-semibold underline cursor-pointer'>Size and fit guide</span>
          </div>
          <div className='grid grid-cols-5 gap-2 mt-4'>
            {sizes.map((size, index) => (
              <Size size={size} key={index} />
            ))}
          </div>
          <Button text='Add to cart' styles='my-6' />
          <div>
            <span className='font-semibold'>Description</span>
            <p className='text-sm leading-relaxed mt-2'>{products[0].desc}</p>
          </div>
          <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
          <div className='flex items-center'>
            <HeartIcon className='w-6 mr-2' />
            <span className='text-sm font-semibold'>Add to wishlist</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Product