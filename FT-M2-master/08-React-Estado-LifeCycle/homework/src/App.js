import React from 'react';
import './App.css';

// components
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'

import Reloj from './components/Reloj.jsx'

export default class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = [
      {
        key: 1,
        max: 34,
        min: 23,
        name: 'Buenos Aires',
        img: '',
        onClose: ()=>{console.log('f')}
      },
      {
        key: 2,
        max: 34,
        min: 23,
        name: 'Buenos Aires',
        img: '',
        onClose: ()=>{alert(this.name)}
      }
    ]
  }

  function onSearch(arg){
    console.log(arg);
  }

  return (
    <div className="App">
      <Nav onSearch/>
      <Reloj/>
      <Cards cities={cities} />
    </div>  
  );
}
