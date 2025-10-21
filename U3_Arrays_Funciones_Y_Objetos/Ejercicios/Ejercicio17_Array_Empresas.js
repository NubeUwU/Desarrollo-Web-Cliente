class Alumno{
    /*DNI, Ciclo, Año Finalización*/
    constructor(DNI, ciclo, anyo){
        this._DNI = DNI;
        this._ciclo = ciclo;
        this._anyo = anyo;
    }

    get DNI(){
        return this._DNI;
    }

    set DNI(value){
        this._DNI = value;
    }

    get ciclo(){
        return this._ciclo;
    }

    set ciclo(value){
        this._ciclo = value;
    }

    get anyo(){
        return this._anyo;
    }

    set anyo(value){
        this._anyo = value;
    }
}

class Empresa{
   
    ciclos = [];
    alumnos = [];
   
    /*CIF, Ciclos*/
    constructor(CIF){
        this._CIF = CIF;
    }

    get CIF(){
        return this._CIF;
    }

    set CIF(value){
        this._CIF = value;
    }

    get ciclo(){
        return this._ciclo;
    }

    set ciclo(value){
        this._ciclo = value;
    }

    alta(alumno){
        this.alumnos.push(alumno);
    }

    baja(DNI){
        this.alumnos = this.alumnos.filter(
            (a) => (a.DNI !== DNI)
        );
    }


    // Busqueda por Ciclo
    alumnosPorCiclo(ciclo){
        let busqueda = [];
        busqueda = this.alumnos.filter(
            (a) => a.ciclo === ciclo);

        return busqueda;
    }

    // Busqueda por Año
    alumnosPorAnyo(anyo){
        let busqueda = [];
        busqueda = this.alumnos.filter(
            (a) => a.anyo === anyo);
    }
}

let empresa1 = new Empresa('G7441510');
empresa1.ciclos.push("DAW", "DAM");

empresa1.alta(new Alumno('18494944B', 'DAW', 2025));
empresa1.alta(new Alumno('18494945A', 'DAW', 2024));
empresa1.alta(new Alumno('18494944H', 'DAW', 2019));
empresa1.alta(new Alumno('18494945M', 'DAM', 2024));
empresa1.alta(new Alumno('18494941U', 'DAW', 2018));
empresa1.alta(new Alumno('18494941D', 'DAM', 2020));


console.log(empresa1.alumnosPorCiclo('DAW'));