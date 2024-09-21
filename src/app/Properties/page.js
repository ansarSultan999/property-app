import React from 'react'
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import apartment from '../../../public/Properties/13.jpg'
import prop1 from '../../../public/Properties/18.jpg'
import prop2 from '../../../public/Properties/20.jpg'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material'
const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]
function page() {
  return (
    <div>
      <header>
        <div className='h-20 w-full bg-blue-700 mt-4 mb-4'>
          <div className='flex justify-center items-center gap-5 pt-4'>
          <input type='text' placeholder='Enter location(city,State,etc' className='p-2 rounded-md'/>
          <input type='text' placeholder='All' className='p-2 rounded-md'/>
          <button className='bg-sky-400 text-white p-2 rounded-md'> Search</button>
          </div>
        </div>
      </header>
    <main>
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5' >
    <div className=" grid grid-cols-1 gap-x-5 md:grid-cols-2  lg:grid-cols-3 gap-y-9 ">
        <div className='Card-main border-2 rounded-lg	shadow-lg shadow-black-500/50'>
            <div>
            <Image
            className='rounded-lg	'
        src={apartment}
        width={1000}    // Specify width and height
        height={1000}
        placeholder="blur"
      />
            </div>
            <div className=' border-b-2 pt-3 mx-4'>
              <p className='text-sm	font-medium text-gray-400'>Apartment</p>
              <h2 className='text-lg font-bold '>Boston Common Retreat</h2>
              <div className='flex align-middle gap-3 justify-center'>
                <div className='text-gray-400 text-sm	font-medium'>
                <BedIcon fontSize="small" />
                3 Beds
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <BathtubIcon fontSize="small" />
              4 Baths
              </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <SquareFootIcon fontSize="small" />
              1500 sqft
              </div>
              </div>
              <div className='flex align-middle gap-3 justify-center mt-3 mb-3'>
                <div className='text-gray-400 text-sm	font-medium'>
                <CalendarMonthIcon fontSize="small" />
                Weekly
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <CalendarMonthIcon fontSize="small" />
              Monthly
              </div>
              </div>
            </div>
            <div className='px-5 pt-4 pb-8'>
            <div className='flex align-middle gap-3 justify-between mt-3 mb-3'>
                <div className='text-red-600'>
                <LocationOnIcon fontSize="small" />
                Baston MA
                </div>
              <div>
              <Button className='bg-blue-600 text-white '>Detail</Button>
              </div>
              </div>
            </div>
        </div>
        <div className='Card-main border-2 rounded-lg	shadow-lg shadow-black-500/50'>
            <div>
            <Image
            className='rounded-lg	'
        src={prop1}
        width={1000}    // Specify width and height
        height={1000}
        placeholder="blur"
      />
            </div>
            <div className=' border-b-2 pt-3 mx-4'>
              <p className='text-sm	font-medium text-gray-400'>Apartment</p>
              <h2 className='text-lg font-bold '>Boston Common Retreat</h2>
              <div className='flex align-middle gap-3 justify-center'>
                <div className='text-gray-400 text-sm	font-medium'>
                <BedIcon fontSize="small" />
                3 Beds
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <BathtubIcon fontSize="small" />
              4 Baths
              </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <SquareFootIcon fontSize="small" />
              1500 sqft
              </div>
              </div>
              <div className='flex align-middle gap-3 justify-center mt-3 mb-3'>
                <div className='text-gray-400 text-sm	font-medium'>
                <CalendarMonthIcon fontSize="small" />
                Weekly
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <CalendarMonthIcon fontSize="small" />
              Monthly
              </div>
              </div>
            </div>
            <div className='px-5 pt-4 pb-8'>
            <div className='flex align-middle gap-3 justify-between mt-3 mb-3'>
                <div className='text-red-600'>
                <LocationOnIcon fontSize="small" />
                Baston MA
                </div>
              <div>
              <Button className='bg-blue-600 text-white '>Detail</Button>
              </div>
              </div>
            </div>
        </div>
        <div className='Card-main border-2 rounded-lg	shadow-lg shadow-black-500/50'>
            <div>
            <Image
            className='rounded-lg	'
        src={prop2}
        width={1000}    // Specify width and height
        height={1000}
        placeholder="blur"
      />
            </div>
            <div className=' border-b-2 pt-3 mx-4'>
              <p className='text-sm	font-medium text-gray-400'>Apartment</p>
              <h2 className='text-lg font-bold '>Boston Common Retreat</h2>
              <div className='flex align-middle gap-3 justify-center'>
                <div className='text-gray-400 text-sm	font-medium'>
                <BedIcon fontSize="small" />
                3 Beds
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <BathtubIcon fontSize="small" />
              4 Baths
              </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <SquareFootIcon fontSize="small" />
              1500 sqft
              </div>
              </div>
              <div className='flex align-middle gap-3 justify-center mt-3 mb-3'>
                <div className='text-gray-400 text-sm	font-medium'>
                <CalendarMonthIcon fontSize="small" />
                Weekly
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <CalendarMonthIcon fontSize="small" />
              Monthly
              </div>
              </div>
            </div>
            <div className='px-5 pt-4 pb-8'>
            <div className='flex align-middle gap-3 justify-between mt-3 mb-3'>
                <div className='text-red-600'>
                <LocationOnIcon fontSize="small" />
                Baston MA
                </div>
              <div>
              <Button className='bg-blue-600 text-white '>Detail</Button>
              </div>
              </div>
            </div>
        </div>
        <div className='Card-main border-2 rounded-lg	shadow-lg shadow-black-500/50'>
            <div>
            <Image
            className='rounded-lg	'
        src={apartment}
        width={1000}    // Specify width and height
        height={1000}
        placeholder="blur"
      />
            </div>
            <div className=' border-b-2 pt-3 mx-4'>
              <p className='text-sm	font-medium text-gray-400'>Apartment</p>
              <h2 className='text-lg font-bold '>Boston Common Retreat</h2>
              <div className='flex align-middle gap-3 justify-center'>
                <div className='text-gray-400 text-sm	font-medium'>
                <BedIcon fontSize="small" />
                3 Beds
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <BathtubIcon fontSize="small" />
              4 Baths
              </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <SquareFootIcon fontSize="small" />
              1500 sqft
              </div>
              </div>
              <div className='flex align-middle gap-3 justify-center mt-3 mb-3'>
                <div className='text-gray-400 text-sm	font-medium'>
                <CalendarMonthIcon fontSize="small" />
                Weekly
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <CalendarMonthIcon fontSize="small" />
              Monthly
              </div>
              </div>
            </div>
            <div className='px-5 pt-4 pb-8'>
            <div className='flex align-middle gap-3 justify-between mt-3 mb-3'>
                <div className='text-red-600'>
                <LocationOnIcon fontSize="small" />
                Baston MA
                </div>
              <div>
              <Button className='bg-blue-600 text-white '>Detail</Button>
              </div>
              </div>
            </div>
        </div>
        <div className='Card-main border-2 rounded-lg	shadow-lg shadow-black-500/50'>
            <div>
            <Image
            className='rounded-lg	'
        src={prop1}
        width={1000}    // Specify width and height
        height={1000}
        placeholder="blur"
      />
            </div>
            <div className=' border-b-2 pt-3 mx-4'>
              <p className='text-sm	font-medium text-gray-400'>Apartment</p>
              <h2 className='text-lg font-bold '>Boston Common Retreat</h2>
              <div className='flex align-middle gap-3 justify-center'>
                <div className='text-gray-400 text-sm	font-medium'>
                <BedIcon fontSize="small" />
                3 Beds
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <BathtubIcon fontSize="small" />
              4 Baths
              </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <SquareFootIcon fontSize="small" />
              1500 sqft
              </div>
              </div>
              <div className='flex align-middle gap-3 justify-center mt-3 mb-3'>
                <div className='text-gray-400 text-sm	font-medium'>
                <CalendarMonthIcon fontSize="small" />
                Weekly
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <CalendarMonthIcon fontSize="small" />
              Monthly
              </div>
              </div>
            </div>
            <div className='px-5 pt-4 pb-8'>
            <div className='flex align-middle gap-3 justify-between mt-3 mb-3'>
                <div className='text-red-600'>
                <LocationOnIcon fontSize="small" />
                Baston MA
                </div>
              <div>
              <Button className='bg-blue-600 text-white '>Detail</Button>
              </div>
              </div>
            </div>
        </div>
        <div className='Card-main border-2 rounded-lg	shadow-lg shadow-black-500/50'>
            <div>
            <Image
            className='rounded-lg	'
        src={prop2}
        width={1000}    // Specify width and height
        height={1000}
        placeholder="blur"
      />
            </div>
            <div className=' border-b-2 pt-3 mx-4'>
              <p className='text-sm	font-medium text-gray-400'>Apartment</p>
              <h2 className='text-lg font-bold '>Boston Common Retreat</h2>
              <div className='flex align-middle gap-3 justify-center'>
                <div className='text-gray-400 text-sm	font-medium'>
                <BedIcon fontSize="small" />
                3 Beds
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <BathtubIcon fontSize="small" />
              4 Baths
              </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <SquareFootIcon fontSize="small" />
              1500 sqft
              </div>
              </div>
              <div className='flex align-middle gap-3 justify-center mt-3 mb-3'>
                <div className='text-gray-400 text-sm	font-medium'>
                <CalendarMonthIcon fontSize="small" />
                Weekly
                </div>
              <div className='text-gray-400 text-sm	font-medium'>
              <CalendarMonthIcon fontSize="small" />
              Monthly
              </div>
              </div>
            </div>
            <div className='px-5 pt-4 pb-8'>
            <div className='flex align-middle gap-3 justify-between mt-3 mb-3'>
                <div className='text-red-600'>
                <LocationOnIcon fontSize="small" />
                Baston MA
                </div>
              <div>
              <Button className='bg-blue-600 text-white '>Detail</Button>
              </div>
              </div>
            </div>
        </div>
        </div>
        <div className='pagenation'>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
        </div>
        </div>
    </main>
    </div>
  )
}

export default page
