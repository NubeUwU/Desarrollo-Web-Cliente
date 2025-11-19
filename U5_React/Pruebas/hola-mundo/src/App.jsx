import { useState } from "react";
import Visor from "./components/Visor.jsx";
function App() { 
  const imagenesSrc = new Array(
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.jpg",
    "imagen4.jpg",
    "imagen5.jpg",
    "imagen6.jpg",
    "imagen7.jpg",
  )
  
  return ( 
    <div className="App"> 
      <header className="App-header"> 
 
      <Visor imagenes={imagenesSrc} /> 
 
      </header> 
    </div>
  ); 
}

export default App
