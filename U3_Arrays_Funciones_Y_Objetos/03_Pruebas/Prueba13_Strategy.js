class VentaCliente{

    constructor(strategy){
        this.strategy = strategy;
    }

    SetStrategy(strategy){
        this.strategy = strategy;
    }

    Calcular(importe){
        return this.strategy.Calcular(importe);
    }

}

// Creamos una estrategia SEPARADA DE LA CLASE
class VentaRegularStrategy{
    constructor(impuesto){
        this.impuesto = impuesto;
    }

    Calcular(importe){
        return importe + (importe * this.impuesto);
    }
}

class VentaDescuentoStrategy{
    constructor(impuesto, descuento){
        this.impuesto = impuesto;
        this.descuento = descuento;
    }

    Calcular(importe){
        return importe + (importe * this.impuesto) - this.descuento;
    }
}

class VentaParaguayStrategy{

    getCambioGuaranies(){
        return 8500;
    }

    Calcular(importe){
        return importe * this.getCambioGuaranies();
    }
}

const ventaRegularStrategy = new VentaRegularStrategy(0.21);
const venta = new VentaCliente(ventaRegularStrategy);
console.log(venta.Calcular(10));
ventaRegularStrategy.impuesto = 0.07;
console.log(venta.Calcular(10));
venta.SetStrategy(new VentaDescuentoStrategy(0.21, 100));
console.log(venta.Calcular(1000));
venta.SetStrategy(new VentaParaguayStrategy);
console.log(venta.Calcular(30));