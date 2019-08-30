class Interfaz {
    constructor() {

        //Intanciar la API
        this.api = new API();

        // Crear los markers con layerGroup
        this.marker = new L.LayerGroup();
        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + enlaceMapa + ' Contributors',
                maxZoom: 18,
            }).addTo(map);
        return map;

    }

    mostrarEstablecimientos() {
        this.api.obtenerDatos()
            .then(datos => {
                const resultados = datos.results;

                // Ejecutar la funcion para mostrar los pines
                this.mostrarPines(resultados);

            });
    }

    mostrarPines(datos) {
        // Limpiar los markers
        this.marker.clearLayers();

        // Recorrer los establecimientos
        datos.forEach(dato => {
            // Destructuring;
            const { latitude, longitude, calle, regular, premium } = dato;

            // Crear Popup
            const opcionesPopup = L.popup()
                .setContent(`
                <p>Calle: ${calle}</p>
                <p><strong>Regular:</strong> $${regular}</p>
                <p><strong>Premium:</strong> $${premium}</p>
            `);

            // Agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopup);

            this.marker.addLayer(marker);
        });

        this.marker.addTo(this.mapa);
    }

    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos().
        then(datos => {
            const resultados = datos.results;

            // Enviar el JSON y la busqueda para el filtrado
            this.filtrarSugerencias(resultados, busqueda);
        });
    }

    filtrarSugerencias(resultado, busqueda) {
        // Filtrar con .filter 
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);

        // Mostrar los pines
        this.mostrarPines(filtro);
    }
}