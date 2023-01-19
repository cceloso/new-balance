import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
      <img src="https://www.newbalance.com.sg/dw/image/v2/AASX_PRD/on/demandware.static/-/Library-Sites-APAC/default/dw60b652fe/IU_Campaign_Updates/IU_1_A_PC.jpg?sw=1616&sfrm=jpg" alt="" />
      <div className='absolute top-[400px] left-[10rem]'>
        <div className='w-[400px] flex flex-col'>
          <span className='font-semibold text-6xl mb-8 font-hero-heading'>This is IU.</span>
          <span className='font-semibold'>Singer. Songwriter. Producer. Actress. Philanthropist. And now a part of the New Balance family.</span>
        </div>
      </div>
    </div>
  )
}

export default Hero