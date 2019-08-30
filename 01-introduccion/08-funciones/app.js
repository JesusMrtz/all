function saludar(nombre) {
    return `Hola soy ${nombre}`;
}

console.log(saludar("Jesus"));


// Funciones anonimas
(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}("JavaScript"));