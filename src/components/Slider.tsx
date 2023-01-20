import { sliderItems } from '../data'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Slider = () => {
  const slideLeft = () => {
    const slider: HTMLElement = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - slider.scrollWidth / 3;
  }

  const slideRight = () => {
    const slider: HTMLElement = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + slider.scrollWidth / 3;
  }

  return (
    <div className='relative flex items-center'>
      <ChevronLeftIcon onClick={slideLeft} className='w-6 mx-2 cursor-pointer opacity-50 hover:opacity-100 lg:hidden' />
      <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide lg:w-[100vw] lg:grid lg:grid-cols-3'>
        { sliderItems.map(item => (
          <img className='p-6 inline-block w-full h-[80vh] object-contain lg:w-auto lg:h-[100vh]' src={item.img} key={item.id} />
        ))}
      </div>
      <ChevronRightIcon onClick={slideRight} className='w-6 mx-2 cursor-pointer opacity-50 hover:opacity-100 lg:hidden' />
    </div>
  )
}

export default Slider