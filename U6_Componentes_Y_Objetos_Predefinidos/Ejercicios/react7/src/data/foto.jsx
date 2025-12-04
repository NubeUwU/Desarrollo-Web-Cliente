class Foto{
    constructor(inicializador){
        this.id = inicializador.id;
        this.titulo = inicializador.titulo;
        this.url = inicializador.url;
        this.alt = inicializador.alt;
        this.descripcion = inicializador.descripcion;
        this.fecha = new Date();
    }

    esNueva(){
        return this.id === undefined;
    }   
}
export default Foto;