import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropDown from './DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { fetchCharactersReducer, searchReducer } from '@/lib/features/search/searchSlice'
import { useDebounce } from 'use-debounce'
function SearchBar() {

  const search = useSelector((state:RootState) => state.search.searchTerm)
  const dispatch = useDispatch<AppDispatch>();
  const [debouncedSearchTerm] = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearchTerm.length>1) {
      dispatch(fetchCharactersReducer(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm]);

  const handleSearch = (e: string) => {
    dispatch(searchReducer(e))
  };

  return (
    <div>
      <div className="relative flex items-center">
        <input  value={search} type="text" placeholder="Search..." onChange={(e)=> handleSearch(e.target.value)}
            className=" placeholder:text-input_theme placeholder:font-bold px-2 py-3 bg-white w-full text-sm rounded-full border-2 border-input_theme outline-none" />
            <Image className=" rotate-90 absolute right-2" src={'/glass.svg'} height={18} width={18} alt='magnifying glass'/>
      </div>
      <DropDown/>
    </div>
  )
}

export default SearchBar
