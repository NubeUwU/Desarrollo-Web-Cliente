// Clase Pelicula
class Pelicula {
  static ultimoId = 0;

  constructor(titulo, fechaEstreno, popularidad, generos = []) {
    this._id = ++Pelicula.ultimoId; 
    this.titulo = titulo;
    this.fechaEstreno = fechaEstreno;
    this.popularidad = popularidad;
    this.generos = generos;         
    this.puntuaciones = [];
  }


  // Getters & Setters
  
  get id() {
    return this._id;
  }

  set titulo(valor) {
    if (typeof valor !== "string" || valor.length > 100) {
      throw new Error("Título inválido");
    }
    this._titulo = valor;
  }

  get titulo() {
    return this._titulo;
  }

  set fechaEstreno(valor) {
    const fecha = new Date(valor);
    if (fecha < new Date("1900-01-01") || fecha > new Date()) {
      throw new Error("Fecha de estreno inválida");
    }
    this._fechaEstreno = fecha;
  }

  get fechaEstreno() {
    return this._fechaEstreno;
  }

  set popularidad(valor) {
    if (typeof valor !== "number" || valor < 0 || valor > 100) {
      throw new Error("Popularidad inválida");
    }
    this._popularidad = valor;
  }

  get popularidad() {
    return this._popularidad;
  }

  get puntuacion() {
    if (this.puntuaciones.length === 0) return 0;
    return Math.round(this.puntuaciones.reduce((a,b)=>a+b,0)/this.puntuaciones.length);
  }

  get numeroVotos() {
    return this.puntuaciones.length;
  }

  set generos(valor) {
    if (!Array.isArray(valor)) throw new Error("Géneros deben ser un array");
    this._generos = valor;
  }

  get generos() {
    return this._generos;
  }

  votar(puntuacion) {
    if (puntuacion < 0 || puntuacion > 10) throw new Error("Puntuación inválida");
    this.puntuaciones.push(puntuacion);
  }
}
