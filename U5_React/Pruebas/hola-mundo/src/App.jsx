import { useState } from "react";
function App() { 
  const [estado, setEstado] = useState({ 
    titulo: "Por defecto", 
    hora: new Date().toLocaleTimeString(), 
    numero: 0, 
    numeros: [], 
  }); 
  const cambiarEstado = () => { 
    let numero = Math.round(Math.random() * 4); 
    let numeros = estado.numeros; 
    numeros.push(numero); 
    setEstado({ 
      hora: new Date().toLocaleTimeString(), 
      numeros: numeros, 
      numero: numero, 
      titulo: numero % 2 === 0 ? "Número par" : "Número impar", 
    }); 
    console.log("cambiarEstado> ", estado); 
  }; 
   
  const colores = ["red", "yellow", "green", "blue", "orange"]; 
  
  return ( 
    <div className="App" style={{ backgroundColor: colores[estado.numero] }}> 
      <header> 
        <h1> 
          {estado.titulo} - {estado.numero} 
        </h1> 
      </header> 
      <div className="App-intro"> 
        <div>{estado.hora}</div> 
        Pulsa el botón para cambiar el estado 
        <div> 
          <button onClick={cambiarEstado}>Cambiar estado</button> 
        </div> 
        <div> 
          Números generados: 
          <ul> 
            {estado.numeros.map((n) => ( 
              <li key={n}>{n}</li> 
            ))} 
          </ul> 
        </div> 
      </div> 
    </div> 
  ); 
}

export default App
