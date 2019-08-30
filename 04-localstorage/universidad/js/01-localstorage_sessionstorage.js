// Agregar al localStorage
localStorage.setItem("nombre", "Karely");

// Obtener un item con un nombre especifico del localStorage
console.log(localStorage.getItem("nombre"));
// Remover un item con u nombre especifico del localStorage
localStorage.removeItem("nombre");

// Limpiar por completo el localStorage
localStorage.clear();

// Agregar al sesionStorage
sessionStorage.setItem("nombre", "jesus");
console.log(sessionStorage.getItem("nombre"));
sessionStorage.removeItem("nombre");