function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Creando un prototipo
Cliente.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo >= 1000) {
        tipo = "Gold";
    } else if (this.saldo >= 500) {
        tipo = "Platino";
    } else {
        tipo = "Normal";
    }
    return tipo;
};


// Prototipo que imprime saldo, nombre y tipo de cuenta
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}, y el tipo de cliente es de ${this.tipoCliente()}`;
};


// Prototipo para retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}


function Empresa(nombre, saldo, telefono, tipo) {
    // Heredar prototypes
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}


const cliente1 = new Cliente("Jesus", 400);

cliente1.retirarSaldo(200);
console.log(cliente1.nombreClienteSaldo());


Empresa.prototype = Object.create(Cliente.prototype);
const empresa = new Empresa("Walook", 21021, "22121292", "Servicio");

console.log(empresa.nombreClienteSaldo());