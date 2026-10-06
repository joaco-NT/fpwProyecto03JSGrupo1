// Importamos los datos y la función de servicios
import { 
    carrito, 
    calcularTotalCarrito 
} from '../services/services05.js';

// Obtenemos los elementos del DOM
const btnTotal = document.querySelector('#btnTotal');
const divTotal = document.querySelector('#total');
const pDetalle = document.querySelector('#detalle');

// Escuchamos el evento click del botón
btnTotal.addEventListener('click', () => {
    
    // Ejecutamos la lógica de cálculo modular
    const resultado = calcularTotalCarrito(carrito);

    // Mostramos los resultados en el DOM
    divTotal.textContent = `Total: $${resultado.total.toLocaleString()}`;
    pDetalle.textContent = `Se compraron ${resultado.cantidad} productos.`;
    
});