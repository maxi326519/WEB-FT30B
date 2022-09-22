import React from 'react';
import styles from './styles/Card.css'

export default function Card({min, max, name, img, onClick}) {
  // acá va tu código
  return (
    <div className="card">
      <button className='btn'>X</button>
      <span className='name'>{name}</span>
      <div className="data">
        <div className="climate">
          <span>Min</span>
          <span>{min}</span>
        </div>
        <div className="climate">
          <span>Max</span>
          <span>{min}</span>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='climate'></img>
      </div>
    </div>
  )
};