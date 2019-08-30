class API {

    async obtenerDatos() {
        // Obtener los datos desde la API
        const datos = await fetch("https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=900");
        const respuestaJSON = await datos.json();

        return respuestaJSON;
    }
}