import Foto from './foto';
export const ColFotos = [
    new Foto(
        {
            id: "001",
            titulo: "Imagen 1",
            url: "imagen1.jpg",
            alt: "Imagen 1",
            descripcion: "Esta es la imagen número 1",
            fecha: new Date()
        }
    ),

    new Foto(
        {
            id: "002",
            titulo: "Imagen 2",
            url: "imagen2.jpg",
            alt: "Imagen 2",
            descripcion: "Esta es la imagen número 2",
            fecha: new Date()
        }
    ),

    new Foto(
        {
            id: "003",
            titulo: "Imagen 3",
            url: "imagen3.jpg",
            alt: "Imagen 3",
            descripcion: "Esta es la imagen número 3",
            fecha: new Date()
        }
    ),
];