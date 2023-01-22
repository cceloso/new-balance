import { MapPinIcon } from "@heroicons/react/24/outline"
import { PH } from 'country-flag-icons/react/3x2'
import CustomLink from "./CustomLink"

const PromoBanner = () => {
  return (
    <div className='w-full bg-[#EFEFEF] px-6 py-2 text-sm font-semibold'>
      <div className='max-w-[1480px] mx-auto grid lg:grid-cols-4'>
        <div></div>
        <div className='bg-yellow mx-auto col-span-2 text-center'>
          <span className='uppercase underline underline-offset-2 cursor-pointer'>Join membership</span> to enjoy <span className='text-[#cf0a2c]'>15% off</span> your first order
        </div>
        <div className='hidden lg:flex items-center justify-end'>
          <div className="mx-4 flex">
            <MapPinIcon className="w-4 mr-1" />
            <CustomLink text="Find a Store" />
          </div>
          <div className="flex">
            <PH className="w-6 mr-2" />
            PH
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner