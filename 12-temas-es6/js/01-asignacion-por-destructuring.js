const cliente = {
    tipo: "Premium",
    nombre: "Antonio",
    datos: {
        ubicacion: {
            ciudad: "Jalisco",
            pais: "México"
        },
        cuenta: {
            desde: "10-12-2012",
            saldo: 2000
        }
    }
}


let { datos: { ubicacion } } = cliente;
console.log(ubicacion);