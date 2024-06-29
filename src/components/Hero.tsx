import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='py-10 mb-10 grid grid-cols-1 lg:grid-cols-2 '>
            <div>
                <h1 className="text-4xl sm:text-6xl leading-[1.3]  sm:leading-[1.4] lg:tracking-wide font-extrabold">
                    Find, book or rent a car - quickly and easily!
                </h1>
                <p className='mt-3 text-lg sm:text-2xl'>Streamline your car rental experience with our effortles booking process.</p>
                <button className="rounded-3xl mt-8 bg-blue-600 py-3 px-10 text-white text-center font-bold hover:bg-blue-800">Explore Cars</button>
            </div>
            <div className='p-5  relative' >
                <Image alt='Car' width={700} height={400} src='/car.png' className=' object-cover  mx-auto' />

            </div>
        </div >
    )
}

export default Hero
