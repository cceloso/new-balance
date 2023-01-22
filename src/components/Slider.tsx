interface ISliderProps {
  images: string[];
  styles?: string;
}

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Slider = (props: ISliderProps) => {
  const slideLeft = () => {
    const slider: HTMLElement = document.getElementById('slider')!
    slider.scrollLeft = slider.scrollLeft - slider.scrollWidth / props.images.length
  }

  const slideRight = () => {
    const slider: HTMLElement = document.getElementById('slider')!
    slider.scrollLeft = slider.scrollLeft + slider.scrollWidth / props.images.length
  }

  return (
    <div className='relative flex items-center'>
      <ChevronLeftIcon onClick={slideLeft} className='w-6 mx-2 cursor-pointer opacity-50 hover:opacity-100 lg:hidden' />
      <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide lg:w-[100vw] lg:grid lg:grid-cols-3'>
        { props.images.map((img, index) => (
          <img className={`inline-block w-full ${props.styles} object-contain lg:w-auto lg:h-[100vh]`} src={img} key={index} />
        ))}
      </div>
      <ChevronRightIcon onClick={slideRight} className='w-6 mx-2 cursor-pointer opacity-50 hover:opacity-100 lg:hidden' />
    </div>
  )
}

export default Slider