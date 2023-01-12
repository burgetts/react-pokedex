import React from 'react'
import './App.css';
import pokemon from './pokemon'
import Pokedex from './Pokedex'

function App() {
  return (
    <>
      <h1> Pokedex </h1>
      <Pokedex pokemon = {pokemon} />  
    </>
  );
}

export default App;
