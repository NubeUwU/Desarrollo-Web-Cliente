import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
const Encabezado = () => {
const contexto = useContext(AppContext);
return (
    <header style={{color: contexto.color}}>
        <h1>Esto es un encabezado</h1>
        <h2>{contexto.titulo}</h2>
    </header>
);
};
export default Encabezado;