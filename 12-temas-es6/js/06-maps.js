const paciente = new Map([
    ["nombre", "Jesus"],
    ["habitacion", 400]
]);


// Agregar un nuevo item
paciente.set("sexo", "Hombre");

// OBtener un solo item
console.log(paciente.get("nombre"));
console.log(paciente);

// Eliminar un item
paciente.delete("sexo");
console.log(paciente);

paciente.set("nombre", "Karely");
console.log(paciente);

// Limpiar un map
paciente.clear();
console.log(paciente);
paciente.set("nombre", "Kiru");
console.log(paciente);


// Saber el tamaño del paciente
console.log(paciente.size);

// Saber si existe un item
console.log(paciente.has("nombre"));