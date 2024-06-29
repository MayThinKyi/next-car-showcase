import { Car, FilterCarParams } from '@/@types';
import { CarSearch, Cars, Hero } from '@/components';
import { fetchCars } from '@/utils'
import React from 'react'

interface Props {
  searchParams: FilterCarParams;
}
const HomePage = async ({ searchParams }: Props) => {
  const cars: Car[] = await fetchCars({
    make: searchParams.make?.toLowerCase() || 'toyota',
    model: searchParams.model || '',
    fuel_type: searchParams.fuel_type?.toLowerCase() || '',
    year: searchParams.year || 2023,
    limit: searchParams.limit || 5
  });
  return (
    <div >
      <Hero />
      <h1 className="text-4xl font-bold mb-3"> Car Catalogue </h1>
      <p>Explore the cars you might like</p>
      <CarSearch />
      <Cars cars={cars} />
    </div>
  )
}

export default HomePage
