const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");


boton1.addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "empleado.json", true);

    xhr.onload = function() {
        if (this.status === 200) {
            const persona = JSON.parse(this.responseText);

            const htmlTemplate = `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Puesto: ${persona.trabajo}</li>
                </ul>
            `;

            document.getElementById("empleado").innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});




boton2.addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "empleados.json", true);

    xhr.onload = function() {
        if (this.status === 200) {
            const personas = JSON.parse(this.responseText);
            let htmlTemplate = "";

            personas.forEach((persona, index) => {
                htmlTemplate += `
                <p>Empleado ${index + 1}</p>
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Puesto: ${persona.trabajo}</li>
                </ul>
            `;
            });


            document.getElementById("empleados").innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});