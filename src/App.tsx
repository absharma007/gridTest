import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Basegrid} from "./components/Basegrid";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function App() {
  return (
    <div className="App">
      <Basegrid />
    </div>
  );
}

export default App;
