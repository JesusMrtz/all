// Instacnias ambas clases
const eventbite = new EventBrite();
const ui = new Interfaz();


//Listener al buscador
document.getElementById("buscarBtn").addEventListener("click", (e) => {
    e.preventDefault();

    // Leer el texto del input 
    const buscador = document.getElementById("evento").value;

    // Leer el select
    const categoriaSeleccionada = document.getElementById("listado-categorias").value;

    // Revisar que haya algo escrito en el buscado
    if (buscador !== "") {
        eventbite.obtenerEventos(buscador, categoriaSeleccionada)
            .then((eventos) => {
                if (eventos.events.length > 0) {
                    ui.limpiarResultados();
                    ui.mostrarEventos(eventos.events);
                } else {
                    // No hay eventos enviar una alerta
                    ui.mostrarMensaje("No hay resultados", "alert alert-danger mt-4");
                }
            });
    } else {
        // Mostar mensaje para que imprima algo
        ui.mostrarMensaje("Escribe algo en el buscador", "alert alert-danger mt-4");
    }
});