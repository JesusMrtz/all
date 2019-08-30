document.querySelector("#generar-nombre").addEventListener("submit", cargarNombres);


// Llamado a AJAX e imprimir los resultados
function cargarNombres(e) {
    e.preventDefault();

    // Leer las variables
    const origen = document.getElementById("origen").value;
    const genero = document.getElementById("genero").value;
    const cantidadNombre = document.getElementById("numero").value;
    let url = "https://uinames.com/api/?";


    // Si hay origen agregarlo a la url
    if (origen !== "") {
        url += `region=${origen}&`;
    }

    // Si hay un género agregarlo a la url
    if (genero !== "") {
        url += `gender=${genero}&`;
    }

    // Si hay una cantidad agregarlo a la url
    if (cantidadNombre !== "") {
        url += `amount=${cantidadNombre}&`;
    }

    // Conectar con AJAX
    const xhr = new XMLHttpRequest();
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (this.status === 200) {
            const arregloNombres = JSON.parse(this.responseText);

            // General el HTML
            let htmlNombre = `<h2>Nombre generados</h2><ul class="lista">`;

            arregloNombres.forEach(nombre => {
                htmlNombre += `<li>${nombre.name}</li>`;
            });

            htmlNombre += `</ul>`;
            document.getElementById("resultado").innerHTML = htmlNombre;
        }

    };

    xhr.send();
}