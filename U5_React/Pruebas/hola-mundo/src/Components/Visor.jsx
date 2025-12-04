import { useRef } from "react";
import './Visor.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faForeward, faBackward} from '@fortawesome/free-solid-svg-icons';
const Visor = (props) => {
    let indiceActual = 0;
    const visorRef = useRef(null);
    const imagenes = props.imagenes;

    const mostrarImagen = () => {
        if (visorRef.current){
            const path = "/images/" + props.imagenes[indiceActual];
            visorRef.current.src = path;
        }
    }

    const siguiente = () => {
        indiceActual++;
        if (indiceActual === imagenes.length) indiceActual = 0;
        mostrarImagen();
    }


    const anterior = () => {
        indiceActual--;
        if (indiceActual === -1) indiceActual = imagenes.length - 1;
        mostrarImagen();
    }

    const primera = () => {
        indiceActual = 0;
        mostrarImagen();
    }

    const ultima = () => { 
        indiceActual = imagenes.length-1; 
        mostrarImagen();
    }

    setTimeout(() => {
        mostrarImagen();
    }, 0);

    return(
        <div className="visor">
            <img ref={visorRef} className="imagen" /><br/>
            <div className="botones">
                <button onClick={siguiente}><FontAwesomeIcon icon ={faPlay}></FontAwesomeIcon></button>
                <button onClick={ultima}><FontAwesomeIcon icon ={faPlay}></FontAwesomeIcon></button>
                <button onClick={anterior}><FontAwesomeIcon icon ={faPlay}></FontAwesomeIcon></button>
                <button onClick={primera}><FontAwesomeIcon icon ={faPlay}></FontAwesomeIcon></button>


            </div>
        
        </div>
    )
}

export default Visor;