import React from "react";

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código

  console.log(max)
  console.log(min)
  console.log(name)
  console.log(img)
  console.log(onClose)

  return (
    <div>
      <button onClick={onClose}>X</button>
      <span>{name}</span>
      <div>
        <div>
          <span>Min</span>
          <span>{min}</span>
        </div>

        <div>
          <span>Max</span>
          <span>{max}</span>
        </div>

        <img href={`http://openweathermap.org/img/wn/${img}@2x`}></img>
      </div>
    </div>
  );
}
