let card = document.querySelector(".card");

console.log(card.parentElement.parentElement.parentElement.children[0].textContent = "Hola desde traversing de un hijo a un padre");


// SIGLING
let enlace = document.querySelectorAll(".enlace");

console.log(enlace[4].previousElementSibling.previousElementSibling);
console.log(enlace[0].nextElementSibling.nextElementSibling);