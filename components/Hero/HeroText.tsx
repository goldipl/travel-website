import React from 'react'
import Button from '../Button'

export const HeroText = () => {
  return (
    <div className='absolute regular-14 max-container top-1/3 z-1 xl:w-3/6 bg-indigo-100/[.15] p-4 rounded-3xl xl:left-[12%] xl:regular-18 lg:left-[7%] md:left-[7%] lg:w-4/6 md:w-4/5 sm:left-[3%]'>
        <h1 className='xl:regular-64 text-white mb-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] md:regular-32 sm:regular-24'>Are you dreaming about special holidays?</h1>
        <Button 
            type='button'
            title='Check out our offert'
            variant='btn_light_lime'
        />
    </div>
  )
}
