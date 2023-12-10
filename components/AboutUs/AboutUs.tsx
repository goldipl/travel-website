import React from 'react'
import MaledviesImg01 from '@/public/images/maledives01.jpg'
import MaledviesImg02 from '@/public/images/maledives02.jpg'

const AboutUs = () => {
  return (
    <div id='about_us' className='relative flex max-container padding-container items-center py-10'>
      <div className='flex h-[400px]'>
        <div className='flex absolute top-[-80px] left-1/4 xl:left-0'>
          <img className='rounded-3xl border-2 border-white' src={MaledviesImg01.src} alt="img" width={400} height={1200}/>
        </div>
        <div className='flex absolute z-[-1] xl:top-[-160px] xl:left-1/3 md: left-1/6 lg:z-0 lg:h-full sm:h-5/6'>
          <img className='rounded-3xl border-2 border-white' src={MaledviesImg02.src} alt="img" width={400} height={1200}/>
        </div>
      </div>
      <div className='p-4 bg-white rounded-3xl m-4 left-1/4 absolute xl:top-[80px] xl:left-2/3'>
        <h1 className='regular-40 mb-5'>About Us</h1>
        <p className='regular-16'>Unique opportunities at the best prices! Here you will find specific trip suggestions based on promotional prices for flights, hotels and transfers.</p>
      </div>
    </div>
  )
}

export default AboutUs