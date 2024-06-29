import { FilterCarParams } from "@/@types";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';
const headers={
    'x-rapidapi-key': 'ec78559722msh1b7fb40a7000ef1p1be4acjsnea22daf491e4',
	'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
}

export  async function fetchCars(searchParams:FilterCarParams){
    const {model,make,year,fuel_type,limit}=searchParams;
    try {
         const response=await fetch(`${url}?make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`,{headers:headers});
        const result=await response.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  