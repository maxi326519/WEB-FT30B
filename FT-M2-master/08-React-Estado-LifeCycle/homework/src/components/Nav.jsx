import React from 'react';
import SearchBar from './SearchBar.jsx';
import './styles/Nav.css';

export default function Nav({onSearch}){

    return (
        <div>
            <SearchBar onSearch/>
        </div>
    );
}