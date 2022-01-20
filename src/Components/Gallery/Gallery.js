import React, { useState, useEffect } from 'react';
import './Gallery.scss';
import Card from '../Card/Card'

const Gallery = ({images}) => {

  const cards = images.map((element) => {
    return <Card 
    id={element.id}
    key={element.id}
    earth_date={element.earth_date}
    sol={element.sol}
    camera={element.camera.full_name}
    roverName={element.rover.name}
    url={element.img_src}
    />
  })
  return (
    <div className="gallery">
      {cards}
    </div>
  );
}

export default Gallery;