import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='mb-8 flex items-center justify-between'>
            <Image alt='Logo' src={'/logo.svg'} width={150} height={100} className='object-cover' />
            <button className="bg-white rounded-3xl text-lg py-3   text-blue-600   text-center">
                Sign In
            </button>
        </nav>
    )
}

export default Navbar
