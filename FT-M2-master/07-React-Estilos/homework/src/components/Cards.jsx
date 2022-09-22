import React from 'react';
import Card from './Card';
import styles from './styles/Cards.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map\
  return (
    <div className='card-content'>
      {props.cities.map((city)=>{
        return (
            <Card
              key={city.name}
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => alert(city.name)}
              />
        )
      })}
    </div>
  )
};