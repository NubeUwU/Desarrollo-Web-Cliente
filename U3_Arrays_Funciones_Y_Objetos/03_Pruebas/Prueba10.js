function sumaNumeros(){
    let argumentos = Array.prototype.slice.call(sumaNumeros.arguments);
    for (let i = 0; i < argumentos.length; i++){
        suma+=argumentos[i];
    }
    
    return(a + b);
}

console.log(sumaNumeros(3, 4));