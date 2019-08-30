// Leer el formulario
const formulario = document.querySelector("#formulario");
const cotizador = new API("e536fdcf593e6631c25d979dbfa9d22902bdf10b5d14341b56e754081143d60f");
const ui = new Interfaz();

// EventListener
formulario.addEventListener("submit", (e) => {
    e.preventDefault();


    // Leer la monedas seleccionada
    const monedaSeleccionada = document.querySelector("#moneda").value;
    const criptomonedaSeleccionada = document.querySelector("#criptomoneda").value;


    // Comprobar que no se encuentren vacios
    if (monedaSeleccionada === "" || criptomonedaSeleccionada === "") {
        ui.mostrarMensaje("Ambos campos son obligatorios", "alert bg-danger text-center");
    } else {
        // Todo bien, consultar la API
        cotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.RAW, monedaSeleccionada, criptomonedaSeleccionada);
            });
    }
});