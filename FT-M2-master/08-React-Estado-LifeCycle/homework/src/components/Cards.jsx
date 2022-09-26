import React from 'react';
import Card from './Card';
import './styles/Cards.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map\
  if(cities){
    return (
      <div className='card-content'>
        {cities.map((city)=>{
          return (
              <Card
                key={city.key}
                max={city.max}
                min={city.min}
                name={city.name}
                img={city.img}
                onClose={()=>{console.log('f')}}
                />
          )
        })}
      </div>
    )
  }else{
    return(
      <div>Sin ciudades</div>
    )
  }
};