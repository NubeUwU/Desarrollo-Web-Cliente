import { Pelicula } from "./DataObjects.js";
import { Genero } from "./DataObjects.js";


function actualizarLocal() {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    localStorage.setItem("generos", JSON.stringify(generos));
}

function iniciarDatos() {
    generos = [];
        generos.push(new Genero("Acción"));
        generos.push(new Genero("Comedia"));
        generos.push(new Genero("Drama"));
        generos.push(new Genero("Terror"));
        generos.push(new Genero("Ciencia Ficción"));
        generos.push(new Genero("Romance"));
        generos.push(new Genero("Musical"));

    peliculas = []; 
        peliculas.push(new Pelicula("Inception", "2010-07-16", 88, [generos[0], generos[4]]));
        peliculas.push(new Pelicula("The Dark Knight", "2008-07-18", 90, [generos[0], generos[2]]));
        peliculas.push(new Pelicula("Forrest Gump", "1994-07-06", 88, [generos[1], generos[2]]));
        peliculas.push(new Pelicula("The Matrix", "1999-03-31", 87, [generos[0], generos[4]]));
        peliculas.push(new Pelicula("Titanic", "1997-12-19", 78, [generos[2], generos[5]]));
        peliculas.push(new Pelicula("La La Land", "2016-12-09", 81, [generos[1], generos[5], generos[6]]));
        peliculas.push(new Pelicula("Get Out", "2017-02-24", 85, [generos[3], generos[1]]));
    

    actualizarLocal();
}


function reiniciarDatos() {
    localStorage.removeItem("peliculas");
    localStorage.removeItem("generos");
    iniciarDatos();
}


var peliculas;
var generos;


function getPeliculas() {
    const datos = JSON.parse(localStorage.getItem("peliculas")) || [];
    return datos.map(p => new Pelicula(p.titulo, p.fechaEstreno, p.puntuacion, p.generos));
}


function getGeneros() {
    const datos = JSON.parse(localStorage.getItem("generos")) || [];
    return datos.map(g => new Genero(g.nombre));
}


function insertarPelicula() {
  if (!peliculas) peliculas = getPeliculas();
  peliculas.push(new Pelicula(titulo, fechaEstreno, popularidad, generos,));
  peliculas.sort(comparerPeliculas);
  actualizarLocal();
}


function eliminarPeliculaPorNombre(peliculas) {
  if (!peliculas) peliculas = getPeliculas();
  peliculas = peliculas.filter((p) => p.titulo !== titulo);
  actualizarLocal();
}


function modificarPeliculaPorNombre(
    nombreBuscado,
    nuevoNombre,
    nuevaFechaEstreno,
    nuevaPopularidad,
    nuevosGeneros,
) {
  if (!peliculas) peliculas = getPeliculas();

  let encontrada = peliculas.find((p) => p.titulo === nombreBuscado);
  
  if (encontrada) {
    encontrada.titulo = nuevoNombre;
    encontrada.fechaEstreno = nuevaFechaEstreno;
    encontrada.popularidad = nuevaPopularidad;
    encontrada.generos = nuevosGeneros;
    actualizarLocal();
  }
}






const existePelicula = (titulo) => {
  if (!peliculas) peliculas = getPeliculas(); 
  return getPeliculas(peliculas) != null;
}


const cargarDatosPeliculas = function () {
  
  let peliculas = getPeliculas();
  let tblBody = document.getElementById("tblPeliculas").querySelector("tbody");

  if (!tblBody) {
    tblBody = document.createElement("tbody");
    document.getElementById("tblLineas").appendChild("tbody");
  }

  tblBody.innerHTML = "";
  lineas.forEach((p) => {
    let fila = document.createElement("tr");
    let tdTitulo = document.createElement("td");
    tdTitulo.textContent = p.Titulo;
    let tdFechaEstreno = document.createElement("td");
    tdFechaEstreno.textContent = p.fechaEstreno;
    let tdPopularidad = document.createElement("td");
    tdPopularidad.textContent = p.popularidad;

    fila.appendChild(tdTitulo);
    fila.appendChild(tdFechaEstreno);
    fila.appendChild(tdPopularidad);

    tblBody.appendChild(fila);
  });
};

const getPeliculasPorNombre = (titulo) => getPeliculas().find((p) => p.Titulo === titulo);



const importMethods = () => {
  window.reiniciarDatos = reiniciarDatos;
  window.iniciarDatos = iniciarDatos;
  window.getPeliculasPorNombre = getPeliculasPorNombre;
  window.insertarPelicula = insertarPelicula;
  window.eliminarPeliculaPorNombre = eliminarPeliculaPorNombre;
  window.modificarPeliculaPorNombre = modificarPeliculaPorNombre;
  window.cargarDatosPeliculas = cargarDatosPeliculas;
  window.existePelicula = existePelicula;
};

importMethods();



