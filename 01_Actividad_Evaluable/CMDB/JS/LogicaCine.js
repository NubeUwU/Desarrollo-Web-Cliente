import { Genero, Pelicula } from "./DatosPeliculas.js";


function actualizaLocal() {
  localStorage.setItem("generos", JSON.stringify(generos));
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
}

function inicializarDatos() {
  generos = [];
  generos.push({ id: 1, nombre: "Acción" });
  generos.push({ id: 2, nombre: "Comedia" });
  generos.push({ id: 3, nombre: "Drama" });
  generos.push({ id: 4, nombre: "Terror" });
  generos.push({ id: 5, nombre: "Ciencia Ficción" });
  generos.push({ id: 6, nombre: "Romance" });
  generos.push({ id: 7, nombre: "Musical" });

  peliculas = [];
  peliculas.push({id: 1, titulo: "Given", FechaEstreno: "2020-08-08", popularidad: 7.7, generos: [2, 6, 7], puntuaciones: [8, 9, 7],});
  peliculas.push({id: 2, titulo: "Interstellar", FechaEstreno: "2014-11-07", popularidad: 8.6, generos: [5, 1, 3], puntuaciones: [9, 10, 8, 9],});
  peliculas.push({id: 3, titulo: "El Conjuro", FechaEstreno: "2013-07-19", popularidad: 7.5, generos: [4, 3], puntuaciones: [7, 8, 6, 7],});
  peliculas.push({id: 4, titulo: "The Dark Knight", FechaEstreno: "2008-07-18", popularidad: 9.0, generos: [1, 3], puntuaciones: [10, 9, 10, 9, 10],});
  peliculas.push({id: 5, titulo: "La La Land", FechaEstreno: "2016-12-09", popularidad: 8.0, generos: [2, 6, 7], puntuaciones: [8, 9, 8, 9],});
  peliculas.push({id: 6, titulo: "Aves de Presa", FechaEstreno: "2010-07-16", popularidad: 8.8, generos: [1], puntuaciones: [9, 9, 10, 8],});
  
  actualizaLocal();
}

function reiniciarDatos() {
  localStorage.removeItem("peliculas");
  inicializarDatos();
}

var peliculas;
var generos;

function getPeliculas() {
  peliculas = JSON.parse(localStorage.getItem("peliculas"))?.map(p =>
    new Pelicula(p.id, p.titulo, p.FechaEstreno, p.popularidad, p.generos, p.puntuaciones)
  ) || [];
  return peliculas;
}

function getGeneros() {
  generos = JSON.parse(localStorage.getItem("generos"))?.map(g =>
    new Genero(g.id, g.nombre)
  ) || [];
  return generos;
}


function addPelicula(id, titulo, fechaEstreno, popularidad, generosArr) {
  peliculas = getPeliculas();
  peliculas.push(new Pelicula(id, titulo, fechaEstreno, popularidad, generosArr, []));
  actualizaLocal();
}

function addGenero(id, nombre) {
  generos = getGeneros();
  generos.push(new Genero(id, nombre));
  actualizaLocal();
}

// Eliminar entradas por nombre
function delPelicula(titulo) {
  peliculas = getPeliculas();
  peliculas = peliculas.filter(p => p.titulo !== titulo);
  actualizaLocal();
}

function delGenero(nombre) {
  generos = getGeneros();
  generos = generos.filter(g => g.nombre !== nombre);
  actualizaLocal();
}


function modPelicula(
  numero,
  nuevoOrigen,
  nuevoDestino,
  nuevaHoraSalida,
  nuevoIntervalo
) {
  if (!lineas) lineas = getLineas();

  let encontrada = lineas.find((l) => l.Numero === numero);
  
  if (encontrada) {
    encontrada.Origen = nuevoOrigen;
    encontrada.Destino = nuevoDestino;
    encontrada.HoraSalida = nuevaHoraSalida;
    encontrada.Intervalo = nuevoIntervalo;
    actualizaLocal();
  }
}