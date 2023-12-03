import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/" className='flex items-center'>
            <i className='bx bx-briefcase bx-md'></i>
            <p className='ml-1 text-lg'>Around<span className='font-bold text-yellow-600'>the</span>World</p>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            
        </ul>
    </nav>
  )
}

export default Navbar