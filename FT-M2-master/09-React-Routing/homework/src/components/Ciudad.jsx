import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './Ciudad.module.css'

export default function Ciudad({city, onFilter}){

    const params = useParams();                 // Extraemos los parametros
    const data = onFilter(params.ciudadID);     // Filtramos el array

    console.log(city);
    console.log(params);
    console.log(data);

    if(data === null){                          // Si data es null es opr que no se encontro la ciudad con el id especificado
        return(
            <div>No se encontro la ciudad</div>
        )
    }else{
        return (
            <div className="ciudad">
                    <div className="container">
                        <h2>{data.name}</h2>
                        <div className="info">
                            <div>Temperatura: {data.temp} ºC</div>
                            <div>Clima: {data.weather}</div>
                            <div>Viento: {data.wind} km/h</div>
                            <div>Cantidad de nubes: {data.clouds}</div>
                            <div>Latitud: {data.latitud}º</div>
                            <div>Longitud: {data.longitud}º</div>
                        </div>
                </div>
            </div>
        )
    }
}