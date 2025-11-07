export class Pelicula {
    constructor (id,titulo,fecha,popularidad,puntuacion,puntuaciones,nVotos,Generos){
        this.id = localStorage["id"] + 1;

    }
}

export class Generos{
    constructor (id,nombre){}
}