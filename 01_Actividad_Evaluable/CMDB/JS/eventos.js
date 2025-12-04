const loadControls = () => {
  const txtTitulo = document.getElementById("txtTitulo");
  const fechaEstreno = document.getElementById("fechaEstreno");
  const popularidad = document.getElementById("popularidad");
  const arrGeneros = document.getElementById("arrGeneros");
  const editPelicula = document.getElementById("editPelicula");
  const btnAnyadir = document.getElementById("btnAnyadir");
  const btnEliminar = document.getElementById("btnEliminar");
  const btnModificar = document.getElementById("btnModificar");
  const btnAccionLinea = document.getElementById("btnAccionLinea");
  
};

const showAnyadirPeliculaEvt = function () {
  
  if (editPelicula) {
    enableActions(false);
    editPelicula.style = "display:block;";
    hijos = editPelicula.childNodes;
    
    for (let h of hijos) {
      h.value = "";
      h.disabled = "";
    }
  }
};


const showEditarPeliculaEvt = () => {
  titulo = prompt("Introduce el título de la pelicula","");
  if (titulo === "") {
    alert("Titulo no valido");
  }
  else if (titulo)
  {
    txtTitulo = String(titulo);
    if (!existePelicula(titulo))
    {
      alert("El titulo introducido no existe");
    }
    else if (editPelicula) {
      editPelicula.style = "display:block;";
      txtTitulo.disabled = "disabled";
      txtTitulo.value = String(titulo);
      enableActions(false);
    }
  }
};

/**
 * Habilita/deshabilita los botones de acción 
 * @param {} enabled <b>true</b> para habilitar <b>false</b> para deshabilitar
 */ 
const enableActions = (enabled) => {
  btnAnyadir.disabled = !Boolean(enabled);
  btnModificar.disabled = !Boolean(enabled);
  btnEliminar.disabled = !Boolean(enabled);
}


const accionPeliculaEvt = () => {
  if (txtTitulo) {
    let titulo = txtTitulo.value.trim();
    if (titulo === "") alert("El título introducido no es válido");

    else if (fechaEstreno < "1900-01-01")
      alert("La fecha no puede ser inferior al '1900 - 01 - 01'");

    else if (isNaN(popularidad))
      alert("Tiene que haber una popularidad");

    else if (arrGeneros == null)
      alert("Tiene que tener algun genero");

    else if (txtTitulo.disabled) {
      modificarLineaPorNumero(
        titulo,
        fechaEstreno,
        popularidad.value,
        arrGeneros,
      );

      limpiaFormLinea();
      enableActions(true);
      loadDataLineas();
    } 
    else {
      if (existePelicula(titulo)) alert("El título de la pelicula ya existe");
      else
        insertaLinea(
            titulo,
            fechaEstreno,
            popularidad.value,
            arrGeneros,
        );
      limpiaFormLinea();
      enableActions(true);
      loadDatosPeliculas();
    }
  }
};



const limpiaFormLinea = () => {

  hijos = editPelicula.childNodes;
  for (let h of hijos) {
    h.value = "";
  }
  editPelicula.style = "display:none;";
};

const eliminarPeliculasEvt = () => {
  tituloPelicula = prompt("Introduce el título de la película");
  tituloPelicula = String(tituloPelicula);
  if (tituloPelicula && tituloPelicula === "") alert("El título de la pelicula introducido no es válido");
  else eliminarPeliculaPorNombre(tituloPelicula);
  loadDataLineas();
};

const modificarPeliculasEvt = () => {
  peliculas = getPeliculas();
  console.log(peliculas);
  loadDatosPeliculas();
};


const loadEvents = () =>
{
      if (btnAnyadir)
        btnAnyadir.addEventListener("click", showAnyadirPeliculaEvt, false);
      if (btnAccionLinea)
        btnAccionLinea.addEventListener("click", accionLineaEvt, false);
      if (btnEliminar)
        btnEliminar.addEventListener("click", eliminarPeliculasEvt, false);
      if (btnModificar)
        btnModificar.addEventListener("click", showEditarPeliculaEvt, false);
}