// Importamos los datos y la función para mostrar
import { 
    productos, 
    mostrarEnResultado 
} from '../services/services03.js';

const btnCalcular = document.querySelector('#btnCalcular');
const resultadoDiv = document.querySelector('#resultado');

btnCalcular.addEventListener('click', () => {

    const productosConIVA = productos.map(producto => ({
        nombre: producto.nombre,
        precioFinal: producto.precio * 1.21
    }));

    mostrarEnResultado(productosConIVA, resultadoDiv);
    
});