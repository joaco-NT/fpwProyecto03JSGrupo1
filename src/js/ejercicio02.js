const boton = document.querySelector("#botonColor");

let colorActual = "lightblue";

boton.addEventListener("click", () => {

    if (colorActual === "lightblue") {
        document.body.style.backgroundColor = "lightgreen";
        colorActual = "lightgreen";
    } else {
        document.body.style.backgroundColor = "lightblue";
        colorActual = "lightblue";
    }

    console.log("El color de fondo cambió a: " + colorActual);
});