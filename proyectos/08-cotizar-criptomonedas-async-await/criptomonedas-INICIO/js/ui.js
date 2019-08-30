class Interfaz {
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();

    }


    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                const select = document.querySelector("#criptomoneda");
                for (const [key, value] of Object.entries(monedas.Data)) {
                    // Añadir el simbolo y el nombre en las opciones
                    const opcion = document.createElement("option");
                    opcion.value = value.Symbol;
                    opcion.textContent = value.CoinName;

                    select.appendChild(opcion);
                }
            });
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement("div");
        div.className = clases;
        div.textContent = mensaje;

        const divMensaje = document.querySelector(".mensajes");
        divMensaje.appendChild(div);

        setTimeout(() => {
            divMensaje.firstChild.remove();
        }, 3000);
    }

    // Imprime el resultado de la cotización
    mostrarResultado(resultado, moneda, criptomoneda) {

        // En caso de un resultado anterior
        const resultadoAnterior = document.querySelector("#resultado > div");
        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }
        const datosMoneda = resultado[criptomoneda][moneda];

        // OBtener la última actualización de la moneda
        const actualizacion = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');
        // Construir el template 
        let templateHTML = `<div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado: </h2>
                <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${datosMoneda.PRICE.toFixed(2)}</p>
                <p>Variación último día: %${datosMoneda.CHANGEPCTDAY.toFixed(2)}</p>
                <p>última actualización: ${actualizacion}</p>
            </div>
        </div>`;

        this.mostrarOcultarSpinner("block");

        setTimeout(() => {
            this.mostrarOcultarSpinner("none");
            // Insertar el resultado
            document.getElementById("resultado").innerHTML = templateHTML;
        }, 3000);
    }


    // Mostrar un spinner de carga al enviar la cotización
    mostrarOcultarSpinner(display) {
        const spinner = document.querySelector(".contenido-spinner");
        spinner.style.display = display;
    }

}