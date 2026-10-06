// Importamos los servicios
import { 
    validarDatosPersona,
    crearPersona, 
    agregarPersonaALista, 
    mostrarTablaPersonas 
} from '../services/services01.js';

let estadoPersonas = [];

const formulario = document.querySelector('#formPersona');
const cuerpoTabla = document.querySelector('#cuerpoTabla');
const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');
const inputLibreta = document.querySelector('#inputLibreta');

const inputsMap = {
    nombre: inputNombre,
    apellido: inputApellido,
    libreta: inputLibreta
};

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const libreta = inputLibreta.value.trim();

    const validacion = validarDatosPersona(nombre, apellido, libreta);

    if (!validacion.valido) {
        alert(validacion.mensaje);
        inputsMap[validacion.campo].focus();
        return; 
    }

    const nuevaPersona = crearPersona(nombre, apellido, libreta);
    estadoPersonas = agregarPersonaALista(estadoPersonas, nuevaPersona);

    mostrarTablaPersonas(estadoPersonas, cuerpoTabla);

});