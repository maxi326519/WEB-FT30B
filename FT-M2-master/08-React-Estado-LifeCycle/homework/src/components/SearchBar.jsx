import React from 'react';
import './styles/SearchBar.css'

export default function SearchBar({onSearch}) {
  // acá va tu código

  return (
    <form>
      <input className='input-city' placeholder='City' type='text' ></input>
      <button className='search' onClick={()=>{onSearch(document.getElementsByClassName('input-city').value)}}>Search</button>
    </form>
  )
};