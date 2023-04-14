import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './components/Pokedex';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />}/>
    </Routes>);
}

export default App;
