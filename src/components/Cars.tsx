'use client';

import { Car } from '@/@types';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import CarItem from './CarItem';

interface Props {
    cars: Car[];
}
const Cars = ({ cars }: Props) => {
    const searchParams = useSearchParams();
    const limit = Number(searchParams.get('limit')) || 5;
    const router = useRouter();
    const loadMoreHandler = () => {
        const quries = new URLSearchParams();
        searchParams.get('make') && quries.append('make', searchParams.get('make')!)
        searchParams.get('model') && quries.append('model', searchParams.get('model')!)
        searchParams.get('fuel') && quries.append('fuel', searchParams.get('fuel')!)
        searchParams.get('year') && quries.append('year', searchParams.get('year')!)
        const number = searchParams.get('limit') ? Number(searchParams.get('limit')) + 5 : 10
        quries.append('limit', number.toString())
        router.push(`?${quries.toString()}`, { scroll: false })
    }
    return (
        <div className='mt-10 '>
            <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-8'>
                {cars.length > 0 ?
                    cars.map((car, index) => {
                        return <CarItem car={car} key={index} />
                    }) :
                    <h1 className="mt-10 mb-20 text-xl w-screen text-center font-bold">Oops! no results</h1>
                }
            </div>
            {
                cars.length !== 0 && cars.length >= 5 && limit < 50 && <div className="text-center mt-8">
                    <button onClick={loadMoreHandler} className=" rounded-3xl bg-blue-600 over:bg-blue-800 py-3 px-20 text-center text-white font-bold">
                        Load More
                    </button>
                </div>
            }
        </div >
    )
}

export default Cars
