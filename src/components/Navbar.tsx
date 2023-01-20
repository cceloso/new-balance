import Logo from '../assets/new-balance-logo.svg'
import { UserIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Link from './Link'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='p-6 font-semibold'>
      <div className='max-w-[1480px] mx-auto grid grid-cols-2'>
        <div className='flex items-center'>
          <img className='w-[3.5rem] mr-8' src={Logo} alt="New Balance Logo" />
          <ul className='hidden lg:flex flex-row text-sm font-bold'>
            <Link text='New' underlineColor='#c00' otherStyles='mr-6' />
            <Link text='Men' underlineColor='#c00' otherStyles='mr-6' />
            <Link text='Women' underlineColor='#c00' otherStyles='mr-6' />
            <Link text='Kids' underlineColor='#c00' otherStyles='mr-6' />
          </ul>
        </div>
        <div className='flex items-center justify-end'>
          <SearchBar otherStyles='mr-8 hidden lg:flex' />
          <div className='mr-8 hidden lg:flex items-center'>
            <UserIcon className='w-6 h-6 mr-1' />
            <Link text='Log in' />
            <span className='text-gray-400 text-sm mx-2'>|</span>
            <Link text='Join' />
          </div>
          <div className='flex items-center'>
            <ShoppingCartIcon className='w-6 h-6 cursor-pointer' />
            <Bars3Icon className=' ml-4 w-6 h-6 cursor-pointer lg:hidden' />
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <SearchBar otherStyles='flex lg:hidden w-full mt-4' />
      </div>
    </div>
  )
}

export default Navbar