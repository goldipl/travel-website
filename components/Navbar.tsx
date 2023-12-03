"use client"
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <nav className='flexBetween max-container padding-container relative z-30 py-5'>
            <Link href="/" className='flex items-center font-bold'>
                <i className='bx bx-briefcase bx-md'></i>
                <p className='ml-1 text-lg'>Around<span className='text-yellow-600'>the</span>World</p>
            </Link>
            <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold'>
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className='lg:flexCenter hidden'>
                <Button 
                    type='button'
                    title='Login'
                    icon='./bx-log-in-circle.svg'
                    variant='btn_dark_green'
                />
            </div>

            <div className='hamburger' onClick={() => setOpen(!open)}>
                <Image
                    src='./bx-menu-alt-right.svg'
                    alt='menu'
                    width='32'
                    height='32'
                    className='inline-flex cursor-pointer lg:hidden'
                />
                <ul className={'absolute top-20 left-0 flex flex-col h-full gap-10 w-full bg-white lg:hidden' + (!open ? ' hidden' : ' flex')}>
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold'>
                            {link.label}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar