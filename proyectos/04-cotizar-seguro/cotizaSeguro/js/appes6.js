// Constructor para seguro
class Seguro {
    constructor(marca, anio, tipoSeguro) {
        this.marca = marca;
        this.anio = anio;
        this.tipoSeguro = tipoSeguro;
    }

    cotizarSeguro() {
        let cantidad;
        const base = 2000;

        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            default:
                cantidad = base * 1.35;
                break;
        }

        // Leer el año 
        const diferenciaAnios = new Date().getFullYear() - this.anio;

        cantidad -= ((diferenciaAnios * 3) * cantidad) / 100;

        /*
        Si el seguro es básico es por 30% más y si es completo 50% mas
        */

        if (this.tipoSeguro === "basico") {
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }

        return cantidad;
    }
}


class Interfaz {
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement("div");

        if (tipo == "error") {
            div.classList.add("error", "mensaje");
        } else {
            div.classList.add("success", "mensaje");
        }

        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector(".form-group"));

        setTimeout(() => {
            document.querySelector(".mensaje").remove();
        }, 3000);
    }

    mostrarResultado(seguro, total) {
        let marca;

        switch (seguro.marca) {
            case '1':
                marca = "Americano";
                break;
            case '2':
                marca = "Asiatico";
                break;
            default:
                marca = "Europeo";
                break;
        }

        // Crear div
        const div = document.createElement("div");

        div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipoSeguro}</p>
        <p>Total: $${total}</p>`;


        const spinner = document.querySelector("#cargando img");
        spinner.style.display = "block";

        setTimeout(() => {
            spinner.style.display = "none";
            document.getElementById("resultado").appendChild(div);
        }, 3000);
    }
}


// EventListener
const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    // Leer la marca seleccionada del select
    const marca = document.getElementById("marca");
    const marcaSeleccionado = marca.value;
    // marca.options[marca.selectedIndex]

    // Leer el año seleccionado del select
    const anio = document.getElementById("anio");
    const anioSeleccionado = anio.value;

    // Leer el valor del radiobutton
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    // Crear instancia de interfaz
    const interfaz = new Interfaz();

    // REvisamos que los campos no esten vacios
    if (marcaSeleccionado === "" || anioSeleccionado === "" || tipo === "") {
        interfaz.mostrarMensaje("Faltan datos, revisa el formulario y prueba de nuevo", "error");
    } else {
        const seguro = new Seguro(marcaSeleccionado, anioSeleccionado, tipo);
        const cantidad = seguro.cotizarSeguro();

        const div = document.querySelector("#resultado div");

        if (div) {
            div.remove();
        }
        interfaz.mostrarResultado(seguro, cantidad);
    }
});

const selectAnios = document.getElementById("anio");
const max = new Date().getFullYear();
const min = max - 20;

for (i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}