import React from 'react'
import Button from './Button'
import Container from './Container'

const SignUpBanner = () => {
  return (
    <Container styles='bg-black text-white py-6 flex items-center justify-center'>
      <span className='text-sm mr-4 font-semibold'>Be the first to know about new arrivals</span>
      <Button text='Sign Up' />
    </Container>
  )
}

export default SignUpBanner