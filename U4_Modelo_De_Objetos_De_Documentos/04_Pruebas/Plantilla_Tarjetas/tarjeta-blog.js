const titulos = [
 {
    titulo: "Las cinco semillas de naranja",
    subtitulo: "La entrega de una carta inofensiva seguida de la muerte.",
 },
 {
    titulo: "Estudio en escarlata",
    subtitulo: "El Dr. Watson conoce a Sherlock Holmes",
 },
 {
    titulo: "El perro de Baskerville",
    subtitulo: "Un perro misterioso aterroriza a una ciudad.",
 },
];

class TarjetaBlog extends HTMLElement{
    constructor(){
        super()
            this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const {shadowRoot} = this;
        const nodoPlantilla = document.getElementById("plantilla-tarjeta");
        if(nodoPlantilla){
            titulos.forEach((t) => {
                const instancia = document.importNode(nodoPlantilla.content, true);

                instancia.querySelector(".titulo").innerHTML = t.titulo;
                instancia.querySelector(".subtitulo").innerHTML = t.subtitulo;
                shadowRoot.appendChild(instancia);

            })
        }
        else{
            shadowRoot.innerHTML = "<p>Fallo en la carga del Shadow Root</p>";
        }
    }
}

customElements.define("tarjeta-blog", TarjetaBlog);