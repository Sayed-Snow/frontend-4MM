import {  RootState } from '@/lib/store';
import React from 'react'
import {  useSelector } from 'react-redux';

function CharacterInfo() {
  const charInfoData = useSelector((state:RootState) => state.search.character)
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ul className="flex flex-col space-y-2 list-none p-4">
        <li >Name:</li>
        <li >Height:</li>
        <li >Mass:</li>
        <li >Hair color:</li>
        <li >Skin color:</li>
        <li >Eye color:</li>
        <li >Birth year:</li>
        <li >Gender:</li>
      </ul>
      <ul className="flex flex-col space-y-2 list-none p-4">
        <li>{charInfoData.name}</li>
        <li>{charInfoData.height}</li>
        <li>{charInfoData.mass}</li>
        <li>{charInfoData.hair_color}</li>
        <li>{charInfoData.skin_color}</li>
        <li>{charInfoData.eye_color}</li>
        <li>{charInfoData.birth_year}</li>
        <li>{charInfoData.gender}</li>
      </ul>
    </div>
  )
}

export default CharacterInfo
