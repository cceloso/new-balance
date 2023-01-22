import { footerLinks } from "../data"
import Container from "./Container"
import FooterColumn from "./FooterColumn"
import Logo from '../assets/new-balance-logo.svg'

const Footer = () => {
  console.log('col')
  return (
    <Container styles='flex flex-column lg:flex-row grid grid-cols-2 lg:grid-cols-6 text-sm py-12'>
      <>
        {footerLinks.map(col => (
          <FooterColumn col={col} />
        ))}
        <div className='col-span-2 lg:pl-36 mt-4 lg:mt-0'>
          <img className='w-[3.5rem]' src={Logo} alt="New Balance Logo" />
          <div className='mt-4 leading-loose'>We stand for something bigger than sneakers. We champion those who are fearlessly driven by their passions. We elevate sport. We do right by people and the planet. Together, we drive meaningful change in communities around the world. We Got Now.</div>
        </div>
        <div className=''>
          
        </div>
      </>
    </Container>
  )
}

export default Footer