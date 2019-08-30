// CREAR UN OBJETO

const PERSONA = {
    nombre: "Jesus",
    apellido: "Martinez",
    profesion: "Desarrollador Js",
    email: "jesusmrtztorres@gmail.com",
    edad: 20,
    musica: ["Rock", "Rap", "Metal"],
    hogar: {
        ciudad: "Mérida",
        pais: "México"
    },
    nacimiento() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(PERSONA.nacimiento());


// CREAR UN ARREGLO DE OBJETOS

const AUTOS = [
    { modelo: "Audi", motor: 6.0 },
    { modelo: "Camaro", motor: 6.1 },
    { modelo: "Challenger", motor: 6.3 }
];


// OBtener solo los nombres con map 
let autosNombre = AUTOS.map((auto, index, array) => auto.modelo );

// Filtrar los motores mayores a 6
let autosMayores = AUTOS.filter((auto, index, array) => auto.motor > 6);

//Obtener la suma total de los motores
let totalMotores = AUTOS.reduce((previus, current) => { return previus.motor + current.motor }, 0);

console.log(autosNombre);
console.log(autosMayores);
console.log(totalMotores);