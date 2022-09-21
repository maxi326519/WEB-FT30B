import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function HelloWorld() {
  return(
    <div>
      <h1>Hola, Soy Henry!</h1>
      <p>Acá abajo van a aparecer los componentes:</p>
    </div>
  )
};

ReactDOM.render(
  <div>
    <HelloWorld/>
    <App/>
  </div>,
  document.getElementById('root')
);
