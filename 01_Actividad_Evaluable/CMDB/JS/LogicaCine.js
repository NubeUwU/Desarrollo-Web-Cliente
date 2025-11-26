import { Genero } from "./DatosPeliculas.js";
import { Pelicula } from "./DatosPeliculas.js";


//#region Métodos comunes

function actualizaLocal() {
  localStorage.setItem("Generos", JSON.stringify(Genero));
  localStorage.setItem("Peliculas", JSON.stringify(Pelicula));
}

function inicializarDatos() {
    Generos = [];
    