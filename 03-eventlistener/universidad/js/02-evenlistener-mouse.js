// Variables
const encabezado = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll(".enlace");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");


// Cuando se le da click al nodo
//btnVaciarCarrito.addEventListener("click", obtenerEvento);

// Cuando se le da doble click al evento
//btnVaciarCarrito.addEventListener("dblclick", obtenerEvento);

// Cuando el puntero está arriba del elemento
//btnVaciarCarrito.addEventListener("mouseenter", obtenerEvento);

// Cuando el puntero sale fuera de un elemento
//btnVaciarCarrito.addEventListener("mouseleave", obtenerEvento);

// Cuando el puntero esta arriba del elemento 
//btnVaciarCarrito.addEventListener("mouseover", obtenerEvento);

// Cuando al dejar de dar click al elemento se ejecuta
btnVaciarCarrito.addEventListener("mouseup", obtenerEvento);

function obtenerEvento(e) {
    console.log(`Evento: ${e.type}`);
}