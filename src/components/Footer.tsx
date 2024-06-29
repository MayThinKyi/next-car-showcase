import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-20 pt-5 pb-3 border-t flex flex-wrap gap-4 md:gap-0 md:flex-nowrap items-center justify-between'>
            <Image alt='Logo' src={'/logo.svg'} width={150} height={100} className='object-cover' />
            <p>@{new Date().getFullYear()} Car Hub. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
