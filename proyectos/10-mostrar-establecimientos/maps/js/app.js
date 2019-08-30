const ui = new Interfaz();

document.addEventListener("DOMContentLoaded", () => {
    ui.mostrarEstablecimientos();
});


// Habilitar búsqueda de establecimientos
const buscador = document.querySelector("#buscar input");

buscador.addEventListener("input", () => {
    if (buscador.value.length > 0) {
        ui.obtenerSugerencias(buscador.value);
    } else {
        ui.mostrarEstablecimientos();
    }
});