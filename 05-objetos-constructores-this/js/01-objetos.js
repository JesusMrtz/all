// Object literal
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;

        if (saldo >= 1000) {
            tipo = "Gold";
        } else if (saldo >= 500) {
            tipo = "Platino";
        } else {
            tipo = "Normal";
        }

        return tipo;
    }
}

const persona = new Cliente("Jesus", 1000);
const persona2 = new Cliente("Jose", 500);


console.log(persona2.tipoCliente());
console.log(persona);