import React, { useState }from 'react';
import './Card.scss';

const Card = ({id, earth_date, sol, camera, roverName, url}) => {

  const [likeData, setLikeData] = useState(false);

  const handleClick = () => {
    if (likeData === true){
      setLikeData(false)
    } else {
      setLikeData(true)
    }
  }

  return (
    <div className="card">
      <img className="image-card" src={url} alt={"an image of Mars taken by" + roverName} id={id}/>
      <h1>{roverName + " Rover - " + camera}</h1>  
      <p>Date Captured: {earth_date}</p>
      <button className={likeData === true ? "aqua" : "grey"} onClick={() => handleClick()}>Like</button>
    </div>
  );
}

export default Card;