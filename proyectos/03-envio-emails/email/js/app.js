// Variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formulario = document.getElementById("enviar-mail");
const btnReset = document.getElementById("resetBtn");


// EventListener
eventListener();

function eventListener() {
    // Deshabilitar submit
    document.addEventListener("DOMContentLoaded", inicioApp);

    // Campos del formulario
    email.addEventListener("keyup", validarCampo);
    asunto.addEventListener("keyup", validarCampo);
    mensaje.addEventListener("keyup", validarCampo);

    // Boton de enviar para agregar el spinner
    formulario.addEventListener("submit", enviarEmail);

    // Boton de reinicio
    btnReset.addEventListener("click", limpiarFormulario);
}


// Funciones
function inicioApp() {
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}


// Valida que el campo tenga algo escrito
function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    // Validar el email
    if (this.type == "email") {
        validarEmail(this);
    }

    if (email.value != "" && asunto.value != "" && mensaje.value != "") {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}


function enviarEmail(e) {
    e.preventDefault();

    // Obtener el spinner
    const spinnerGIF = document.querySelector("#spinner");
    spinnerGIF.style.display = "block";

    // GIF que envia el email
    const enviado = document.createElement("img");
    enviado.src = "img/mail.gif";
    enviado.style.display = "block";

    // Ocultar spinner y mostrar gif de enviado
    setTimeout(function() {
        spinnerGIF.style.display = "none";
        document.querySelector("#loaders").appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formulario.reset();
        }, 5000);
    }, 3000);
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add("error");
    }
}


function validarEmail(campo) {
    const mensaje = campo.value;

    if (mensaje.indexOf("@") != -1 && mensaje.indexOf(".") != -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add("error");
    }
}


function limpiarFormulario(e) {
    e.preventDefault();
    formulario.reset();
}