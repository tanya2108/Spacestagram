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
      <button className={likeData === true ? "pink" : "yellow"} onClick={() => handleClick()}>Like</button>
      <img className="image-card" src={url} alt={"an image of Mars taken by" + roverName} id={id}/>
      <h3>{roverName + " Rover - " + camera}</h3>  
      <p>Date Captured: {earth_date}</p>
    </div>
  );
}

export default Card;