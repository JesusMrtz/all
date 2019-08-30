// Funcion que no existe
try {
    algo();
} catch (error) {
    console.log(error);
} finally {
    console.log(" Ha finally no le importa.. siempre lo ejecuta");
}

function obtenerClientes() {
    console.log("Descargando...");

    setTimeout(function() {
        console.log("Completo");
    }, 3000);
}

obtenerClientes();