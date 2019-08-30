// Promises

// Si se cumple la petición
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Se ejecutó");
    }, 5000);
});


// Se pasa a then cuando se pasa un resolve, si se pasa un reject se utiliza catch
promesa1.then(function(mensaje) {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});





// Si no se cumple la petición
const promesa2 = new Promise((resolve, reject) => {
    const descuento = false;

    if (descuento) {
        resolve("Se aplicó el descuento");
    } else {
        reject("No se aplicó");
    }
});


// Se pasa a then cuando se pasa un resolve, si se pasa un reject se utiliza catch
promesa2.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});