// Reemplazar elementos
const nuevoHeader = document.createElement("h2");

// Agregar un ID 
nuevoHeader.id = "encabezado";

// Agregar nuevo texto
nuevoHeader.textContent = "Nuevo encabezado";


// Elemento anterior será reemplazado 
const anterior = document.querySelector("#encabezado");
const elementoPadre = document.getElementById("lista-cursos");

//Reemplazar 
elementoPadre.replaceChild(nuevoHeader, anterior);


console.log(elementoPadre);
console.log(anterior);
console.log(nuevoHeader);