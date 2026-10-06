// Responsabilidad Única: Almacenar y proveer los datos iniciales del 
// carrito con el estado de stock de cada producto.
export const carrito = [
    { producto: "Notebook", precio: 800000, enStock: true },
    { producto: "Mouse", precio: 15000, enStock: false },
    { producto: "Teclado", precio: 30000, enStock: true },
    { producto: "Monitor", precio: 200000, enStock: true }
];

// Responsabilidad Única: Filtrar, procesar y calcular el costo total 
// y la cantidad de los productos disponibles en stock dentro del carrito.
export const calcularTotalCarrito = (listaCarrito) => {
    
    // Paso 1: filter() para crear un arreglo solo con 
    // los que tienen enStock === true
    const productosEnStock = listaCarrito.filter(item => item.enStock === true);

    // Paso 2: map() para extraer solo los precios de ese 
    // arreglo filtrado
    const precios = productosEnStock.map(item => item.precio);

    // Paso 3: reduce() para sumar todos los precios 
    // y obtener el total
    const total = precios.reduce((acumulador, precioActual) => acumulador + precioActual, 0);

    return {
        total: total,
        cantidad: productosEnStock.length
    };
};