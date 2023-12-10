import React from 'react'
import MaledviesImg01 from '@/public/images/maledives01.jpg'
import MaledviesImg02 from '@/public/images/maledives02.jpg'

const AboutUs = () => {
  return (
    <div className=' relative max-container padding-container py-10'>
      <div>
        <div className='absolute top-[-80px] left-0'>
          <img className='rounded-3xl border-2 border-white' src={MaledviesImg01.src} alt="img" width={400} height={1200}/>
        </div>
        <div className='absolute top-[-160px] left-1/3'>
          <img className='rounded-3xl border-2 border-white' src={MaledviesImg02.src} alt="img" width={400} height={1200}/>
        </div>
      </div>
      <div className='absolute top-[80px] left-2/3'>
        <h1 className='regular-40 mb-5'>About Us</h1>
        <p className='regular-16'>Unique opportunities at the best prices! Here you will find specific trip suggestions based on promotional prices for flights, hotels and transfers.</p>
      </div>
    </div>
  )
}

export default AboutUs