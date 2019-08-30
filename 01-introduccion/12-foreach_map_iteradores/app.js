const pendientes = ["Ingles", "Css", "SQl", "JavaScript"];

// Foreach
pendientes.forEach((pendiente, index) => console.log(pendiente));




// Recorrer un arreglo de objetos
const carrito = [
    { id: 1, producto: "Libro" },
    { id: 2, producto: "Camisa" },
    { id: 3, producto: "Guitarra" },
    { id: 4, producto: "Disco" },
]


const nombreProducto = carrito.map((carrito) => carrito.producto);

console.log(nombreProducto);