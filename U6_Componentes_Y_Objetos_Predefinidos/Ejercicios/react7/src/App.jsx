import { useState } from 'react'
import './App.css'
import { ColFotos } from './data/ColFotos'
import Pie from './components/Pie'
import { AppContext } from './AppContext'
import Encabezado from './components/Encabezado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppContext.Provider value={valoresDefecto}>
      <Encabezado />
      <div>Esto solamente es un contexto</div>
      <Pie></Pie>
    </AppContext.Provider>
    </>
  );
};

export default App;
