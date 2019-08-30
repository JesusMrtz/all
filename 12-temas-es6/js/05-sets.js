let numero = new Set([1, 2, 3, 4, 5, 6, 1, 2, 3, 4]);
console.log(numero);
console.log("El tamaño del set es de: " + numero.size);

let setToArray = Array.from(numero);
console.log(setToArray);

let setVacio = new Set();

setVacio.add("Jesus");
setVacio.add("Karely");
setVacio.add("Kiru");
setVacio.add("Karely");

console.log(Array.from(setVacio));



// Comprobar que un valor exista
console.log("Existe kiru?: " + setVacio.has("Kiru"));

// Eliminar algo de set
setVacio.delete("Jesus");

console.log(setVacio);