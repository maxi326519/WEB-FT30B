import React from 'react';
import './App.css';

//  Components:
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

// Variables
import data from './data.js';

function App() {
  return (
    <div className="App">
      <Nav onSearch={(ciudad) => alert(ciudad)}/>
      <Cards cities={data}/>
    </div>
  );
}

export default App;
