class EventBrite {
    constructor() {
        this.tokenAuth = "DNKGA4UNARJIRK3K3LDY";
        this.ordenar = "date";
    }

    async obtenerCategorias() {
        // Consultar las categorías a la REST API de eventbrite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.tokenAuth}`);

        // Esperar las respuesta de la categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();

        return categorias;
    }


    // Mostrar resultados de la búsqueda
    async obtenerEventos(evento, categoria) {
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.tokenAuth}`);

        // Esperar la respuesta del eventos y devolverlo a JSON
        return await respuestaEvento.json();
    }
}