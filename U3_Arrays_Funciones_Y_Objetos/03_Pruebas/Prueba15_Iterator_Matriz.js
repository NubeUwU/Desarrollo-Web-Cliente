class Matriz{
    constructor (ancho, alto, elemento = (i, j)=> undefined){
        this.ancho = ancho;
        this.alto = alto;
        this.contenido = [];
        
        for( let j = 0; j<this.alto; j++){
            for (let i = 0; i<this.alto;i++){
                this.contenido[j*ancho+i] = elemento(i,j);
            }
        }
    }

    get(i,j){
        return this.contenido[j*this.ancho+i];
    }
    set(i,j,value){
        this.contenido[j*this.alto +i] = value;
    }
}

class MatrizIterator{
    constructor(matriz){
        this.i = 0;
        this.j = 0;
        this.matriz = matriz;
    }

    next(){
        if(this.j == this.matriz.alto) return{done:true};
        let value = {
            i: this.i,
            j: this.j,
            value: this.matriz.get(this.i,this.j)
        };
        this.i++;
        if(this.i == this.matriz.ancho){
            this.i = 0;
            this.j++;
        }
        return{value, done:false}
    }
}

let mat = new Matriz(3, 2);
mat.set(0, 0, 12);
mat.set(0, 1, 367);
mat.set(0, 2, 235);

mat.set(1, 0, 33);
mat.set(1, 1, 303);
mat.set(1, 2, 8);

console.log(mat);