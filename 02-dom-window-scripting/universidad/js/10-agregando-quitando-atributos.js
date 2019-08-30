const enlaces = document.querySelectorAll(".enlace");
const navegacion = document.getElementById("principal");

// Remover elementos del DOM 
//enlaces[0].remove();
//const navegacion = document.querySelector("#navegacion");


// Remover elementos del DOM desde el padre
//navegacion.removeChild(enlaces[0]);


// obtener la clase
let elemento = enlaces[0].className;


//Obtener un elemento del DOM  
let enlace = document.querySelector(".enlace");

// Obtener clases en formato String 
console.log(enlace.className);

// Obtener clases en formato arreglo 
console.log(enlace.classList);

// Agregar una nueva clases 
console.log(enlace.classList.add("nuevoEnlace"));

// Obtener un atributo 
console.log(enlace.getAttribute("href"));

// Crear un nuevo atributo o sobrescribirlo
console.log(enlace.setAttribute("data-id", 20));

// Saber si el elemento tiene un atributo 
console.log(enlace.hasAttribute("data-id"));

// Remover un atributo 
console.log(enlace.removeAttribute("data-id"));