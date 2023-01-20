import Logo from '../assets/new-balance-logo.svg'
import { UserIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from './Link'
import SearchBar from './SearchBar'

const Navbar = () => {
  const toggleMobileNav = () => {
    const mobileNav: HTMLElement = document.querySelector('ul')!
    const menuIcon: HTMLElement = document.querySelector('#menuIcon')!
    const closeIcon: HTMLElement = document.querySelector('#closeIcon')!
    const searchBarContainer: HTMLElement = document.querySelector('#searchBarContainer')!
    const cartIcon: HTMLElement = document.querySelector('#cartIcon')!
    const mobileLogin: HTMLElement = document.querySelector('#mobileLogin')!
    const mainContainer: HTMLElement = document.querySelector('#mainContainer')!

    if (mobileNav.classList.contains('hidden')) {
      mobileNav.classList.remove('hidden')
      mobileNav.classList.add('flex')
      menuIcon.classList.add('hidden')
      closeIcon.classList.remove('hidden')
      searchBarContainer.classList.add('hidden')
      cartIcon.classList.add('hidden')
      mobileLogin.classList.remove('hidden')
      mainContainer.classList.add('h-[100vh]')
    } else {
      mobileNav.classList.add('hidden')
      menuIcon.classList.remove('hidden')
      closeIcon.classList.add('hidden')
      searchBarContainer.classList.remove('hidden')
      cartIcon.classList.remove('hidden')
      mobileLogin.classList.add('hidden')
      mainContainer.classList.remove('h-[100vh]')
    }
  }

  return (
    <div className='p-6 font-semibold relative transition-all duration-300' id='mainContainer'>
      <div className='max-w-[1480px] mx-auto grid grid-cols-2'>
        <div className='flex flex-col lg:flex-row lg:items-center'>
          <img className='w-[3.5rem] mr-8' src={Logo} alt="New Balance Logo" />
          {/* <ul className='hidden lg:flex flex-row text-sm font-bold'> */}
          <ul className='hidden lg:flex flex-col lg:flex-row text-sm font-bold'>
            <Link text='New' underlineColor='nb-red' styles='mt-8 lg:mr-6 lg:mt-0' />
            <Link text='Men' underlineColor='nb-red' styles='mt-8 lg:mr-6 lg:mt-0' />
            <Link text='Women' underlineColor='nb-red' styles='mt-8 lg:mr-6 lg:mt-0' />
            <Link text='Kids' underlineColor='nb-red' styles='mt-8 lg:mr-6 lg:mt-0' />
            <div className='hidden mt-12 flex items-center font-normal' id='mobileLogin'>
              <UserIcon className='w-6 h-6 mr-4' />
              <Link text='Log in' />
              <span className='text-gray-400 text-sm mx-2'>|</span>
              <Link text='Join' />
            </div>
          </ul>
        </div>
        <div className='flex lg:items-center justify-end'>
          <SearchBar styles='mr-8 hidden lg:flex' />
          <div className='mr-8 hidden lg:flex items-center'>
            <UserIcon className='w-6 h-6 mr-1' />
            <Link text='Log in' />
            <span className='text-gray-400 text-sm mx-2'>|</span>
            <Link text='Join' />
          </div>
          <div className='flex lg:items-center'>
            <ShoppingCartIcon className='w-6 h-6 cursor-pointer' id='cartIcon' />
            <Bars3Icon className='ml-4 w-6 h-6 cursor-pointer lg:hidden' onClick={toggleMobileNav} id='menuIcon' />
            <XMarkIcon className='ml-4 w-6 h-6 cursor-pointer hidden' onClick={toggleMobileNav} id='closeIcon' />
          </div>
        </div>
      </div>
      <div className='flex items-center' id='searchBarContainer'>
        <SearchBar styles='flex lg:hidden w-full mt-4' />
      </div>
    </div>
  )
}

export default Navbar