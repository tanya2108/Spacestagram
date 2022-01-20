import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';

const App = () => {

  const [images, setImages] = useState ([]);

  useEffect( () => {
    fetchImageData();
  }, [])

  const fetchImageData = async () => {
    const response = await fetch('https://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?sol=2023&page=1')
    const responseJson = await response.json()
    setImages(responseJson.photos)
  }


  return (
    <div className="App">
      <Header/> 
      <Gallery images={images}/>
    </div>
  );
}

export default App;
