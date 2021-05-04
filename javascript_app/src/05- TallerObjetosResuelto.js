console.log('+-------------------------Taller Vehiculo-------------------+');


const vehiculo = {
    marca: 'BMW',
    capacidadTanque: 100,
    cantCombustible: 1,
    kilometroXlitro: 1,
    radioLlanta: 15,
    color: 'Rojo',
    encendido: false,
    kilometrajeVehiculo: 0,
    calucoGiroLlanta() {

        console.log(`1 Giro con llanta de radio:  ${this.radioLlanta}, avanza : ${((Math.PI * this.radioLlanta) / 100)} Mts`);

    },
    tanquear() {
        if (this.cantCombustible < this.capacidadTanque) {
            this.cantCombustible += (Math.round(Math.random() * 10) * 2);
            if (this.cantCombustible > this.capacidadTanque) {
                this.cantCombustible = this.capacidadTanque;
            }
        }

        console.log(`Vehiculo tanqueado PARA ::: ${this.cantCombustible}  km`);


    },
    encender() {
        if (this.cantCombustible >= 2) {
            this.encendido = true;
            console.log(`El carro esta Encendido ${this.encendido}`);
        } else {
            console.log(`El carro esta no tiene sufuciente gasolina`);
        }

    },
    acelerar() {
        if (this.cantCombustible >= 2) {

            let avance = Math.round(Math.random() * 10);
            if (avance > this.cantCombustible) {
                console.log(`El carro esta avanzo : ${this.cantCombustible} Km`);                
                this.kilometrajeVehiculo += this.cantCombustible;
                this.cantCombustible = 0;
            } else {
                this.cantCombustible -= avance;
                console.log(`El carro esta avanzo : ${avance} Km`);
                this.kilometrajeVehiculo += avance;
            }
            


        } else {
            console.log(`El carro esta no tiene sufuciente gasolina`);
            this.apagar();
        }

    },
    apagar() {
        this.encendido = false;
        console.log(`El carro se ha apagado :C`);
    }

};

vehiculo.calucoGiroLlanta();
vehiculo.tanquear();
vehiculo.encender();
do {
    vehiculo.acelerar();
    console.log(`capacidad del tanque ${vehiculo.cantCombustible}`)

} while (vehiculo.cantCombustible > 1);
vehiculo.apagar();

console.log(`El vehiculo avanzo un total de :  ${vehiculo.kilometrajeVehiculo} KM`)










