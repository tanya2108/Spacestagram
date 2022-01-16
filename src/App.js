import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';

const App = () => {
  return (
    <div className="App">
      <Header/> 
      <Gallery/>
    </div>
  );
}

export default App;
