// Responsabilidad Única: Almacenar y proveer el catálogo inicial 
// de productos con sus respectivos precios base.
export const productos = [
    { nombre: "Coca", precio: 1000 },
    { nombre: "Pan", precio: 500 },
    { nombre: "Leche", precio: 1200 }
];

// Responsabilidad Única: Renderizar dinámicamente en el DOM 
// los productos procesados junto con sus precios finales calculados.
export const mostrarEnResultado = (productosConIVA, contenedor) => {
    contenedor.innerHTML = productosConIVA.map(item => `
        <p>Producto: ${item.nombre} - Precio Final: $${item.precioFinal}</p>
    `).join("");
};