import React, { useState, useEffect }from 'react';
import './Card.scss';

const Card = ({id, earth_date, sol, camera, roverName, url}) => {

  return (
    <div className="card">
      <img className='image-card' src={url} alt={roverName,camera} id={id}/>
      <h1>{roverName + ` Rover - ` + camera }</h1>  
      <p>sol: {sol}</p>
      <p>date: {earth_date}</p>
      <button>Like</button>
    </div>
  );
}

export default Card;