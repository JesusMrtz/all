class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    tipoCliente() {
        let tipo;

        if (this.saldo >= 1000) {
            tipo = "Gold";
        } else if (this.saldo >= 500) {
            tipo = "Platino";
        } else {
            tipo = "Normal";
        }

        return tipo;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}


class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // Se va al  constructor padre
        super(nombre, saldo);

        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida() {
        return `Bienvenido al cajero para empresas`;
    }
}


const jesus = new Cliente("Jesus", 1000);

console.log(Cliente.bienvenida());
console.log(jesus.tipoCliente());

const empresa1 = new Empresa("Walook", 3232, "3232323", "servicio");
console.log(Empresa.bienvenida());
console.log(empresa1.imprimirSaldo());