const ciudades = ["Mérida", "Progreso", "Peto", "Baca"];

const [primeraCiudad, segundaCiudad, terceraCiudad, cuartaCiudad = "No existe"] = ciudades;

console.log(primeraCiudad);
console.log(segundaCiudad);
console.log(terceraCiudad);
console.log(cuartaCiudad);


const Clientes = {
    tipo: "Premium",
    saldo: 3000,
    datos: {
        nombre: "Karely",
        apellido: "Ricalde",
        residencia: {
            ciudad: "Mérida"
        }
    },
    movimientos: ["12-03-2019", "13-03-2019"]
};

let {
    datos: { residencia: { ciudad } },
    movimientos: [uno]
} = Clientes

console.log(ciudad);
console.log(uno);