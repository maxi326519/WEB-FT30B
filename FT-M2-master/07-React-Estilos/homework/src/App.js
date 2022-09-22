import React from 'react';
import './App.css';

//  Components:
import SearchBar from './components/SearchBar.jsx';
import Cards from './components/Cards.jsx';

// Variables
import data from './data.js';

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(ciudad) => alert(ciudad)}/>
      <Cards cities={data}/>
    </div>
  );
}

export default App;
