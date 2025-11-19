// Clase Generos
class Genero {
  static ultimoId = 0;

  constructor(nombre) {
    this._id = ++Genero.ultimoId; 
    this.nombre = nombre;          
  }

  get id() {
    return this._id;
  }

  set nombre(valor) {
    if (typeof valor !== "string" || valor.length > 100) {
      throw new Error("Nombre de género inválido");
    }
    this._nombre = valor;
  }

  get nombre() {
    return this._nombre;
  }
}

