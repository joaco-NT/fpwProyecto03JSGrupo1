// Importamos los servicios 
import { 

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

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const libreta = inputLibreta.value.trim();

    if (!nombre || !apellido || !libreta) return;

    // Creamos la persona y actualizamos el array (Lógica de datos)
    const nuevaPersona = crearPersona(nombre, apellido, libreta);
    estadoPersonas = agregarPersonaALista(estadoPersonas, nuevaPersona);

    // Obtenemos el HTML generado por el servicio y lo insertamos en la tabla
    mostrarTablaPersonas(estadoPersonas, cuerpoTabla);

    // Limpiamos el formulario
    formulario.reset();
    inputNombre.focus();
});