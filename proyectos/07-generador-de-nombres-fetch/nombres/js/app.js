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

    // Conectar con fetch

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let htmlTemplate = `<h2>Nombre generados</h2><ul class="lista">`;

            data.forEach(nombre => {
                htmlTemplate += `<li>${nombre.name}</li>`;
            });
            htmlTemplate += `</ul>`;
            document.querySelector("#resultado").innerHTML = htmlTemplate;
        }).
    catch((error) => {
        console.log(error);
    });
}