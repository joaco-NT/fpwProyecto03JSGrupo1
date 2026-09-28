
// Responsabilidad Única: Crear el objeto persona limpio
export const crearPersona = (nombre, apellido, libreta) => ({
    nombre: nombre.trim(),
    apellido: apellido.trim(),
    libreta: libreta.trim()
});

// Responsabilidad Única: Agregar un elemento de forma inmutable
export const agregarPersonaALista = (listaActual, nuevaPersona) => [
    ...listaActual, 
    nuevaPersona
];

// Responsabilidad Única: Transformar los datos de personas en un string de HTML usando .map()
export const mostrarTablaPersonas = (personas, cuerpoTabla) => {
    cuerpoTabla.innerHTML = personas.map(persona => `
        <tr class="tabla__fila">
            <td class="tabla__dato">${persona.nombre}</td>
            <td class="tabla__dato">${persona.apellido}</td>
            <td class="tabla__dato">${persona.libreta}</td>
        </tr>
    `).join("");
};