// Información desde un archivo txt 
const btnCargar = document.getElementById("cargar");

btnCargar.addEventListener("click", cargarDatos);


function cargarDatos() {
    // CRear el objeto
    const xhr = new XMLHttpRequest();

    // Abrir una conexión 
    xhr.open("GET", "datos.txt", true);

    // Una vez que carga la página ;

    /**
     * Forma antigua utilizando oreadystatechange
     */

    xhr.onreadystatechange = function() {

        /**
         * Ready status
         * 0 - No inicializada
         * 1 - Conexión establecida
         * 2 - Recibida
         * 3 - Procesando
         * 4 - Respuesta lista
         */
        console.log(`Estado ${this.readyState}`);

        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }

    /**
     * Forma más actualizada utilizando onload
     */

    xhr.onload = function() {
        /**
         * Los estados de las peticiones
         * 200: correcto
         * 403: Prohibido
         * 404: No encontrado
         * 500: Problemas del servidor
         */

        if (this.status === 200) {
            document.getElementById("listado").innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // Enviar el request
    xhr.send();
}