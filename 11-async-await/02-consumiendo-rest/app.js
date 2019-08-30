async function leerUsuarios() {
    // ESperando la respuesta
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    // Procese cuando la respuesta este hecha
    const datos = respuesta.json();

    return datos;
}

leerUsuarios()
    .then((usuarios) => {
        console.log(usuarios);
    })
    .catch((error) => {
        console.error(error);
    });