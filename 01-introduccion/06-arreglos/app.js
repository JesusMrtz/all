const numeros = [10, 30, 50, 20, 60, 40];

console.log(numeros);


// Verificar si es un arreglo
console.log(`¿Es un arreglo?: ${Array.isArray(numeros)}`);


// Valores a ordenar de menor a mayor 
console.log("Los elementos ordenados de menor a mayor: ");
console.log(numeros.sort((a, b) => a - b));

// Valores ordenados de mayor a menor
console.log("Los elementos ordenados de mayor a menor: ");
console.log(numeros.sort((a, b) => b - a));