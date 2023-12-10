"use client"
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <nav className='absolute top-0 left-0 z-30 w-full'>
            <div className='w-full flexBetween max-container padding-container z-30 py-5'>
                <Link href="/" className='flex items-center font-bold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]'>
                    <i className='bx bx-briefcase bx-md text-lime-500'></i>
                    <p className='ml-1 text-2xl'>Around<span className='text-lime-500'>the</span>World</p>
                </Link>
                <ul className='hidden h-full gap-12 lg:flex'>
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className='regular-16 text-white flexCenter [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] cursor-pointer transition-all hover:font-bold'>
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <div className='lg:flexCenter hidden'>
                    <Button 
                        type='button'
                        title='Discounts'
                        icon='./bx-log-in-circle.svg'
                        variant='btn_light_lime'
                    />
                </div>

                <div className='lg:hidden' onClick={() => setOpen(!open)}>
                    <Image
                        src='./bx-menu-alt-right.svg'
                        alt='menu'
                        width='32'
                        height='32'
                        className='inline-flex cursor-pointer invert lg:hidden'
                    />
                    <ul className={'absolute top-20 left-0 flex flex-col gap-5 p-3 w-full bg-white lg:hidden' + (!open ? ' hidden' : ' flex')}>
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold'>
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar