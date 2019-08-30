// Crear elemento
const enlace = document.createElement("a");

// Agregando una clase
enlace.className = "enlace";

// Añadir id 
enlace.id = "nuevo-id";

// Añadir href
enlace.setAttribute("href", "#");

// Añadir texto
enlace.textContent = "Nuevo enlace";

// Añadirlo al padre
let navegacion = document.querySelector("#secundaria");

navegacion.appendChild(enlace);
console.log(navegacion);
console.log(enlace);