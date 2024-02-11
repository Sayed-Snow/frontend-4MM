import { characterInfoReducer } from '@/lib/features/search/searchSlice';
import { AppDispatch, RootState } from '@/lib/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function DropDown() {
    const dispatch = useDispatch<AppDispatch>();
    const char = useSelector((state:RootState) => state.search.characterResponse)
    const results = char.results ? char.results : [];

    const handleItemSelect =(e:Character) =>{
        dispatch(characterInfoReducer(e))
    }

  return (
    <ul className="dropdown-list">
      {results.map((item, index) => (
        <li key={index} className='cursor-pointer'
        onClick={() => handleItemSelect(item)}>
          {item.name}
        </li>
      ))}
    </ul>
    )
  
}

export default DropDown
