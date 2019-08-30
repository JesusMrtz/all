class Interfaz {
    constructor() {
        this.init();
        // Leer el resultado
        this.listado = document.getElementById("resultado-eventos");
    }

    init() {
        this.imprimirCategorias();
    }

    // Imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbite.obtenerCategorias()
            .then((categorias) => {
                const cards = categorias.categories;

                // Seleccionar el select de categorias
                const selectCategorias = document.getElementById("listado-categorias");

                // Recorremos el arreglo e imprimimos los options
                cards.forEach(card => {
                    const options = document.createElement("option");
                    options.value = card.id;
                    options.textContent = card.name_localized;
                    selectCategorias.appendChild(options);
                });
            });
    }

    // Método para imprimir mensajes
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement("div");
        div.classList = clases;
        div.textContent = mensaje;

        const buscadorDiv = document.getElementById("buscador");
        buscadorDiv.appendChild(div);

        // Quitar el alert después de 3 segundos
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);

    }

    // DEsaparece el mensaje en caso de que exista
    limpiarMensaje() {
        const alert = document.querySelector(".alert");

        if (alert) {
            alert.remove();
        }
    }


    // Lee la respuesta de la API y muestra los resultados
    mostrarEventos(eventos) {
        // Recorrer los eventos
        eventos.forEach(evento => {
            this.listado.innerHTML += `
                <div class="col-12 col-md-4 mb-4">
                    <div class="card">
                        <img class"img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">
                        <div class=""card-body">
                            <div class="card-text">
                                <h2 class"text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${evento.description.text.substring(0, 280)}...</p>
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Limpia los resultados previos
    limpiarResultados() {
        this.listado.innerHTML = "";
    }
}