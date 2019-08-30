let elemento = document.getElementById("encabezado");

let idElemento = elemento.id;
let classElemento = elemento.className;
let textElemento = elemento.textContent;

elemento.style.background = "#333";
elemento.style.color = "#fff";
elemento.style.padding = "20px";
elemento.textContent = "Los mejores cursos";

console.log(elemento);
console.log(`El id del elemento: ${idElemento}`);
console.log(`Las clases de los elementos: ${classElemento}`);
console.log(`El texto del elemento: ${textElemento}`);