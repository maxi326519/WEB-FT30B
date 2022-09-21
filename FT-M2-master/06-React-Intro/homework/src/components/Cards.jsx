import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities.map((citie)=>{
        return <div key={citie.name}>
          <Card
            max={citie.main.temp_max}
            min={citie.main.temp_min}
            name={citie.name}
            img={citie.weather[0].icon}
            onClose={() => alert(citie.name)}
          />
        </div>
      })}
    </div>
  )
};

/* 
        <Card
          max={citie.main.temp_max}
          min={citie.main.temp_min}
          name={citie.name}
          img={citie.weather[0].icon}
          onClose={() => alert(citie.name)}
        />
 */