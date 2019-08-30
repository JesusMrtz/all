const carrito = document.getElementById("carrito");
const listaCursos = document.getElementById("lista-cursos");
const tbody = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");


// listener
cargarEventListener();

function cargarEventListener() {
    // Dispara cuando se preciosa agregar carrito 
    listaCursos.addEventListener("click", comprarCurso);

    // Cuando se elimina un curso en el carrito
    carrito.addEventListener("click", eliminarCurso);

    // Disparar cuando se vacia el carrito
    btnVaciarCarrito.addEventListener("click", vaciarCarrito);

    // Al cargar el documento cargar el localStorage
    document.addEventListener("DOMContentLoaded", cargarLocalStorage);
}


// Función para cargar el localStorage
function cargarLocalStorage() {
    let cursosLocalStorage = obtenerCursosLocalStorage();

    cursosLocalStorage.forEach(curso => {
        // Construir el template
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;

        tbody.appendChild(row);
    });
}

// Función para añadir curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}


// Leer los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")
    }

    insertarCarrito(infoCurso);
}


// Muestra los datos seleccionados en el carrito
function insertarCarrito(curso) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
    `;

    tbody.appendChild(row);

    guardarCursoLocalStorage(curso);
}


// Almacenar cursos al localStorage
function guardarCursoLocalStorage(curso) {
    let cursos = obtenerCursosLocalStorage();
    cursos.push(curso);

    localStorage.setItem("cursos", JSON.stringify(cursos));
}


// Comprueba que halla elementos en el localStorage
function obtenerCursosLocalStorage() {
    let cursosLocalStorage;

    if (localStorage.getItem("cursos")) {
        cursosLocalStorage = JSON.parse(localStorage.getItem("cursos"));
    } else {
        cursosLocalStorage = [];
    }

    return cursosLocalStorage;
}


// Eliminar un curso 
function eliminarCurso(e) {
    e.preventDefault();

    let curso, cursoId;
    if (e.target.classList.contains("borrar-curso")) {
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector("a").getAttribute("data-id");

        curso.remove();
        eliminarCursoLocalStorage(cursoId);
    }
}


// Eliminar el curso por el ID del localStorage
function eliminarCursoLocalStorage(ID) {
    let cursosLocalStorage = obtenerCursosLocalStorage();

    cursosLocalStorage.forEach((curso, iterador) => {
        if (curso.id == ID) {
            cursosLocalStorage.splice(iterador, 1);
        }
    });

    localStorage.setItem("cursos", JSON.stringify(cursosLocalStorage));
}


// Vaciar carrito
function vaciarCarrito() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    // Vaciar localStorage
    vaciarLocalStorage();

    return false;
}


// Elimina todos los cursos de localStorage
function vaciarLocalStorage() {
    localStorage.clear();
}