// Responsabilidad Única: Validar que un texto esté compuesto 
// exclusivamente por letras y espacios.
const soloTieneLetras = (texto) => {
    const permitidos = "abcdefghijklmnopqrstuvwxyzáéíóúñÁÉÍÓÚÑ ";
    for (const letra of texto.toLowerCase()) {
        if (!permitidos.includes(letra)) return false;
    }
    return true;
};

// Responsabilidad Única: Validar que el código de la libreta tenga 
// la longitud correcta, caracteres permitidos, y obligatoriamente letras y números.
const esLibretaValida = (libreta) => {
    if (!libreta || libreta.length < 5 || libreta.length > 10) return false;
    
    const permitidos = "abcdefghijklmnopqrstuvwxyz0123456789";
    let tieneLetra = false;
    let tieneNumero = false;
    
    for (const caracter of libreta.toLowerCase()) {
        if (!permitidos.includes(caracter)) return false;
        if (caracter >= 'a' && caracter <= 'z') {
            tieneLetra = true;
        } else if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        }
    }
    return tieneLetra && tieneNumero;
};

// Responsabilidad Única: Comprobar las reglas de negocio y validaciones 
// generales para todos los campos de la persona.
export const validarDatosPersona = (nombre, apellido, libreta) => {
    if (!nombre || !soloTieneLetras(nombre)) {
        return { valido: false, campo: 'nombre', mensaje: '⚠️ El nombre solo debe contener letras.' };
    }
    if (!apellido || !soloTieneLetras(apellido)) {
        return { valido: false, campo: 'apellido', mensaje: '⚠️ El apellido solo debe contener letras.' };
    }
    if (!libreta || !esLibretaValida(libreta)) {
        return { valido: false, campo: 'libreta', mensaje: '⚠️ La Libreta Universitaria debe tener entre 5 y 10 caracteres y combinar letras y números.' };
    }
    
    return { valido: true };
};

// Responsabilidad Única: Instanciar y limpiar los datos de un nuevo 
// objeto persona aplicando transformaciones (trim y uppercase).
export const crearPersona = (nombre, apellido, libreta) => ({
    nombre: nombre.trim(),
    apellido: apellido.trim(),
    libreta: libreta.trim().toUpperCase()
});

// Responsabilidad Única: Agregar una nueva persona al arreglo de la lista 
// de forma inmutable usando spread operator.
export const agregarPersonaALista = (listaActual, nuevaPersona) => [
    ...listaActual, 
    nuevaPersona
];

// Responsabilidad Única: Renderizar y actualizar dinámicamente las filas 
// de la tabla HTML con los datos de las personas.
export const mostrarTablaPersonas = (personas, cuerpoTabla) => {
    cuerpoTabla.innerHTML = personas.map(persona => `
        <tr class="tabla__fila">
            <td class="tabla__dato">${persona.nombre}</td>
            <td class="tabla__dato">${persona.apellido}</td>
            <td class="tabla__dato">${persona.libreta}</td>
        </tr>
    `).join("");
};