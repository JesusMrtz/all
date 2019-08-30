// Declarar las variables
const busqueda = document.querySelector("#buscador");


// Cada vez que se presiona un boton tiene un retraso de una letra
//busqueda.addEventListener("keydown", obtenerEvento);

// Cada vez que dejas de presionar la tecla
//busqueda.addEventListener("keyup", obtenerEvento);

// Cada vez que presiona una tecla
//busqueda.addEventListener("keypress", obtenerEvento);

// Cuando entras en el input
//busqueda.addEventListener("focus", obtenerEvento);

// Cada vez que sales del input
//busqueda.addEventListener("blur", obtenerEvento);

// Cada vez que corte una palabra
//busqueda.addEventListener("cut", obtenerEvento);

// cada vez que copie una palabra
//busqueda.addEventListener("copy", obtenerEvento);

// Cada vez que pegue una palabra
//busqueda.addEventListener("paste", obtenerEvento);

// Función 
function obtenerEvento(e) {
    console.log(busqueda.value);
    console.log(`El evento es: ${e.type}`);
}