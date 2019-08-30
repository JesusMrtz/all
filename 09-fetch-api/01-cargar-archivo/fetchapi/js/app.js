document.getElementById("txtBtn").addEventListener("click", cargarTXT);
document.getElementById("jsonBtn").addEventListener("click", cargarJSON);
document.getElementById("apiBtn").addEventListener("click", cargarAPI);


function cargarTXT() {
    fetch("datos.txt")
        .then((request) => {
            return request.text();
        })
        .then((data) => {
            document.getElementById("resultado").innerHTML = data;
        })
        .catch((error) => {
            console.log(error);
        });
}


function cargarJSON() {
    fetch("empleados.json")
        .then((request) => {
            return request.json();
        })
        .then((data) => {
            let htmlTemplate = "";

            data.forEach(empleado => {
                htmlTemplate += `
                    <li>${empleado.nombre} - ${empleado.puesto}</li>
                `;
            });
            document.getElementById("resultado").innerHTML = htmlTemplate;
        })
        .catch((error) => {
            console.log(error);
        });
}


function cargarAPI() {
    fetch("https://picsum.photos/list")
        .then((request) => {
            return request.json();
        })
        .then((data) => {
            let htmlTemplate = "";

            data.forEach(imagen => {
                htmlTemplate += `
                <li>
                    <a href="${imagen.post_url}" target="_blank">Ver imagen</a>
                    ${imagen.author}
                </li>
            `;
            });
            document.getElementById("resultado").innerHTML = htmlTemplate;
        })
        .catch((error) => {
            console.log(error);
        });
}