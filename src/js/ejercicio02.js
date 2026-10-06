import { cambiarColorFondo } from '../services/services02.js';
    const boton = document.querySelector("#botonColor");

    boton.addEventListener("click", () => {

    cambiarColorFondo();
    
    console.log("El color de fondo cambió");

});
