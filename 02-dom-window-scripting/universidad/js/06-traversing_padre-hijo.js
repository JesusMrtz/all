let navegacion = document.querySelector("#principal");

console.log(navegacion.children);
console.log(`El primer hijo es una etiqueta: ${navegacion.children[0].nodeName}`);
console.log(`El tipo del primer elemento hijo es: ${navegacion.children[0].nodeType}`);


// Navegacion del traversing de pare a hijo 
let cards = document.querySelectorAll(".card");

console.log(cards[0].lastElementChild);
console.log(cards[0].firstElementChild);
console.log(cards[0].childElementCount);