import React, { FC, useEffect } from 'react'
import { IcRoundSearch } from '../assets/IcRoundSearch'

interface NavbarProps {
  onChange: (value: string) => void
  search: string
}

export const Navbar: FC<NavbarProps> = ({ search, onChange }) => {
  // Get url query params
  const urlParams = new URLSearchParams(window.location.search)
  const searchParam = urlParams.get('logo')

  return (
    <nav className='bg-[#004CD6] flex flex-row gap-2 items-center shadow-md px-4 lg:px-8 py-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl text-white font-bold logo'>Utlandsfest</h1>
        <div className='flex cursor-pointer flex-row items-center bg-white w-fit lg:px-3 lg:py-2 p-2 rounded-md'>
          <input
            value={search}
            onChange={(e) => onChange(e.target.value)}
            type='text'
            name='search'
            id='search'
            placeholder='Fiaslaget'
            className='placeholder:text-gray-500 text-gray-700 focus:outline-none'
          />
          <label htmlFor='search'>
            <IcRoundSearch />
          </label>
        </div>
      </div>
      <div className='grow flex justify-end'>
        <img src={searchParam ? '/logo_old.png' : 'logo.png'} className='lg:w-24 lg:h-24 w-20 h-20 transition-all rounded-full shadow-sm' alt='Yes' />
      </div>
    </nav>
  )
}
