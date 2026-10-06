const filtroGenero = document.querySelector("#filtroGenero");
const botonFiltrar = document.querySelector("#btnFiltrar");
const listaPeliculas = document.querySelector("#listaPeliculas");


btnFiltrar.addEventListener("click", () => {

    const generoSeleccionado = filtroGenero.value;

    listaPeliculas.innerHTML = "";

    let peliculasFiltradas;

    if (generoSeleccionado === "todos") {

        peliculasFiltradas = peliculas;

    } else {

        peliculasFiltradas = peliculas.filter(
            pelicula => pelicula.genero === generoSeleccionado
        );

    }


    peliculasFiltradas.forEach(pelicula => {

        const li = document.createElement("li");

        li.textContent =
            pelicula.titulo +
            " - " +
            pelicula.genero +
            " - Puntaje: " +
            pelicula.puntaje;

        listaPeliculas.appendChild(li);

    });

});