// Event Listener click al buscador
const buscador = document.querySelector("#encabezado");

buscador.addEventListener("click", ejecutarBoton);

function ejecutarBoton(e) {
    e.preventDefault();
    console.log(e.target);
    console.log("Usted ha dado click");
}