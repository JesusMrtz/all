// Callback en foreach

const ciudades = ["México", "New York", "Madrid", "Paris", "Viena", "Irlanda"];

// Inline callback
/*ciudades.forEach((ciudad) => {
    console.log(ciudad);
});*/


// Se agrega un país después de 2 segundos
function nuevoPais(pais, callback) {
    setTimeout(() => {
        ciudades.push(pais);
        callback();
    }, 3000);
}

// Los paises se muestran después de 1 segundo
function mostrarPaises() {
    setTimeout(function() {
        let html = "";

        ciudades.forEach((pais) => {
            html += `<li>${pais}</li>`;
        });

        document.getElementById("app").innerHTML = html;
    }, 1000);
}


nuevoPais("Las vegas", mostrarPaises);
mostrarPaises();