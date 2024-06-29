'use client';
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import CarFilter from './CarFilter'
import { manufacturers } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';

const CarSearch = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [make, setMake] = useState(searchParams.get('make') || '');
    const [query, setQuery] = useState('');
    const [model, setModel] = useState(searchParams.get('model') || '');
    const filteredManufactures =
        query === ''
            ? manufacturers
            : manufacturers.filter((item) =>
                item.toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    const searchHandler = () => {
        const quries = new URLSearchParams();
        make ? quries.append('make', make.toLowerCase()) : quries.delete('make')
        model ? quries.append('model', model.toLowerCase()) : quries.delete('model')
        searchParams.get('fuel') && quries.append('fuel', searchParams.get('fuel')!)
        searchParams.get('year') && quries.append('year', searchParams.get('year')!)
        // searchParams.get('limit') && quries.append('limit', searchParams.get('limit')!)
        router.push(`?${quries.toString()}`, { scroll: false })
    }
    return (
        <div className='mt-10 flex items-center flex-wrap lg:flex-nowrap justify-between'>
            <div className="mb-4 lg:mb-0 flex   items-center">
                <div className="flex flex-wrap sm:flex-nowrap gap-10 items-center bg-[#F9F9FC] py-2 sm:py-3 px-4 sm:px-5 rounded-3xl">
                    <div className="flex items-center gap-2">
                        <Image src={'/make.svg'} alt='Manufacturer' width={20} height={20} />
                        <Combobox value={make} onChange={(value) => setMake(value!)}>
                            <div className="relative z-20 mt-1">
                                <div className="relative w-full cursor-default overflow-hidden rounded-lg  text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                    <Combobox.Input
                                        className="w-full bg-inherit outline-none  border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900  "
                                        displayValue={(item: string) => item}
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </Combobox.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery('')}
                                >
                                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {filteredManufactures.length === 0 && query !== '' ? (
                                            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                Nothing found.
                                            </div>
                                        ) : (
                                            filteredManufactures.map((item) => (
                                                <Combobox.Option
                                                    key={item}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={item}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span onClick={() => setMake(item)}
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {item}
                                                            </span>
                                                            {selected ? (
                                                                <span
                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                        }`}
                                                                >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={'/model.png'} alt='Model' width={20} height={20} />
                        <input value={model} onChange={(e) => setModel(e.target.value)} className='bg-inherit outline-none' placeholder='Model...' />
                    </div>
                </div>
                <Image onClick={searchHandler} className='ml-[-20px] cursor-pointer' src={'/search.svg'} width={40} height={40} alt='Search' />
            </div>
            <CarFilter />
        </div>
    )
}

export default CarSearch
