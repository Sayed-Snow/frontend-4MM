'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { searchCharacters } from '../_utils/GlobalApi'
function SearchBar() {
  useEffect(()=>{
    console.log(searchCharacters('ja'))

  },[])

  return (
    <div className="relative flex items-center">
      <input type="text" placeholder="Search..."
          className=" placeholder:text-input_theme placeholder:font-bold px-2 py-3 bg-white w-full text-sm rounded-full border-2 border-input_theme outline-none" />
          <Image className=" rotate-90 absolute right-2" src={'/glass.svg'} height={18} width={18} alt='asda'/>
    </div>
  )
}

export default SearchBar
