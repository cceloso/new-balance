interface SearchBarProps {
  styles?: string;
}

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className={`relative flex items-center text-gray-400 focus-within:text-gray-600 ${props.styles}`}>
      <MagnifyingGlassIcon className='w-5 h-5 absolute right-0 mx-2' />
      <input className='bg-[#ededed] py-1 pl-2 pr-9 border-2 border-[#d7d7d7] placeholder-[gray-400] w-full' type="text" placeholder='Search' />
    </div>
  )
}

export default SearchBar