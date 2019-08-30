//Destructuring de funciones
function reservacion(completo, opciones) {
    let  { metodoPago = "N/A", cantidad = 0, dias = 0 } = opciones;

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}


reservacion(true, {
    metodoPago: "Trajeta",
    cantidad: 200,
    dias: 2
});

reservacion(false, {})