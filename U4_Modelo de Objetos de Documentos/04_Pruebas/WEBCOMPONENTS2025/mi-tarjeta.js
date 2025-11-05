class MiTarjeta extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Hola, mundo";
    }
}

window.customElements.define('mi-tarjeta', MiTarjeta);
