import { Car } from '@/@types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoClose } from 'react-icons/io5';

interface Props {
    car: Car;
}
const CarItem = ({ car }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (<>
        <div onClick={() => setIsModalOpen(true)} className='cursor-pointer bg-[#F9F9FC] rounded-3xl  hover:shadow-md p-4 hover:bg-white transition-colors duration-150 ease-in-out'>
            <h1 className="sm:text-lg flex items-center gap-2 font-bold mb-1">
                <p className='capitalize'>{car.make}</p>
                <p className='capitalize'>{car.model}</p>
            </h1>
            <div className="flex flex-col">
                <p className='font-semibold text-zinc-600'>$</p>
                <p className='text-xl font-bold ms-3  my-[-12px]'>{calculateCarRent(car.city_mpg, car.year)}</p>
                <p className='ms-8 font-semibold text-zinc-600'>/Day</p>
            </div>
            <Image className='mx-auto' src={'/car.png'} alt='Car' width={300} height={200} />
            <div className="flex items-center justify-between">
                <div className="text-center">
                    <Image className='mx-auto' src={'/wheel.svg'} alt='Wheel' width={20} height={20} />
                    <p className='font-semibold'>{car.transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                </div>
                <div className="text-center">
                    <Image className='mx-auto' src={'/tire.svg'} alt='Wheel' width={20} height={20} />
                    <p className='font-semibold uppercase'>{car.drive}</p>
                </div>
                <div className="text-center">
                    <Image className='mx-auto' src={'/gas.svg'} alt='Wheel' width={20} height={20} />
                    <p className='font-semibold'>{car.city_mpg}</p>
                </div>
            </div>
        </div>
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="flex items-center justify-center px-2 sm:px-4 py-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full h-[90vh] overflow-y-scroll  max-w-md transform   rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div onClick={() => setIsModalOpen(false)} className='absolute top-[5px] right-[5px] cursor-pointer w-max p-1 bg-[#F9F9FC] rounded-full'>
                                    <IoClose size={30} />
                                </div>
                                <div className='imgBg   rounded-lg mx-auto object-cover'>
                                    <Image src={'/car.png'} alt='Car' width={300} height={200} className='  mx-auto  ' />
                                </div>
                                <div className="mt-3 flex items-center gap-5">
                                    {[1, 2, 3].map((item) => {
                                        return <div key={item} className='p-3 rounded-lg bg-[#f6f6f6]'>
                                            <Image src={'/car.png'} alt='Car' width={120} height={200} className='mx-auto' />
                                        </div>
                                    })}
                                </div>
                                <h1 className="text-xl font-bold my-3">
                                    <span className='capitalize'>{car.make}</span>
                                    <span className='ms-2 uppercase'>{car.model}</span>
                                </h1>
                                {Object.entries(car).map(([key, value]) => {
                                    return <div key={key} className="flex items-center justify-between mb-3">
                                        <p className='capitalize font-semibold text-zinc-600'>{key.replace('_', ' ')}</p>
                                        <p className='capitalize'>{value}</p>
                                    </div>
                                })}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
    )
}

export default CarItem
