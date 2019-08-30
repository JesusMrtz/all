async function obtenerClientes() {
    // Creando un promise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Clientes descargados...");
        }, 5000);
    });

    // Error o no
    const error = false;

    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject("Hubo un error");
    }
}


obtenerClientes()
    .then((res) => console.log(res))
    .catch((error) => console.error(error));