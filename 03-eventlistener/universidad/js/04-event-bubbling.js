const card = document.querySelector(".card");
const infoCurso = document.querySelector(".info-card");
const agregarCarrito = document.querySelector(".agregar-carrito");

card.addEventListener("click", function(e) {
    console.log("Click en card");
    e.stopPropagation();
});

infoCurso.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Click en infoCurso");
});

agregarCarrito.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Click en agregar carrito");
});