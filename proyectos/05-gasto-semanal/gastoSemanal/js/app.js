// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
    }

    presupuestoRestante(cantidad = 0) {
        return this.restante -= cantidad;
    }
}


class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('#total');
        const restanteSpan = document.querySelector("#restante");

        // Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert", tipo);
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector(".primario").insertBefore(divMensaje, formulario);

        // Quitar el alert
        setTimeout(() => {
            document.querySelector(".primario .alert").remove();
            formulario.reset();
        }, 3000);
    }

    // Inserta el gasto a la lista
    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector("#gastos ul");

        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        // Insertar el gasto
        li.innerHTML = `${nombre} 
        <span class="badge badge-primary badge-pill">$${cantidad}</span>`;
        // Insertar en el HTML
        gastosListado.appendChild(li);
    }

    // Obtener el presupuesto restante
    presupuestoRestante(cantidad) {
        const restante = document.querySelector("span#restante");

        // Leemos el presupuesto restante
        const presupuestoRestante = cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML = `${presupuestoRestante}`;

        this.comprobarPresupuesto();
    }

    // Cambia el color del presupuesto restante
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        const restante = document.querySelector(".restante");

        // Obtener los colores al presupuesto;
        if (presupuestoRestante < (presupuestoTotal / 4)) {
            restante.classList.remove("alert-success", "alert-warning");
            restante.classList.add("alert-danger");
        } else if (presupuestoRestante < (presupuestoTotal / 2)) {
            restante.classList.remove("alert-success", "alert-danger");
            restante.classList.add("alert-warning");
        }
    }
}



// Variables
const presupuestoUsuario = prompt("¿Cuál es tu presupuesto semanal?");
const formulario = document.getElementById("agregar-gasto");
let cantidadPresupuesto;
const ui = new Interfaz();



// EventListener
document.addEventListener("DOMContentLoaded", function() {
    if (presupuestoUsuario === null ||  presupuestoUsuario === "") {
        window.location.reload();
    } else {
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(parseFloat(presupuestoUsuario));
        // Instanciar interfaz
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombreGasto = document.querySelector("#gasto").value;
    const cantidadGasto = document.querySelector("#cantidad").value;

    // Instanciar la interfaz
    if (nombreGasto == "" ||  cantidadGasto == "") {
        ui.imprimirMensaje("Hubo un error", "alert-danger");
    } else {
        // Insertar en el HTML 
        ui.imprimirMensaje("Correcto", "alert-success");
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
});