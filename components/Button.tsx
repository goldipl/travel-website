import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_light_lime'
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        className={`flexCenter gap-3 rounded-full border ${variant}`}
        type={type}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24} className='invert'/>}
        {title}
    </button>
  )
}

export default Button