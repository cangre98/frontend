console.log('+-------------------------Objetos-------------------+');


const persona = {
    nombre: 'Harold Adiran',
    apellidoPaterno: 'Bolaños',
    apellidoMaterno: 'Rodriguez',
    fechaNacimiento: 'Rodriguez',
    dirreccion: {
        viaPrincipal: 'Calle',
        numeroVia: 43,
        nombreVia: 'San pedro',
        placa: 'Villa Magna',
        location: 'Sur Oriente',
        comuna: '16'

    }
};

const vehiculo = {
    marca: 'BMW',
    tipo: 'Carro',
    caracteristicas: {
        color: 'negro',
        caballosFuerza: 700,
        placa: 'MKO-558',
        motor: 'V8',
        dueno: {
            nombre: 'Harold Adiran',
            apellidoPaterno: 'Bolaños',
            apellidoMaterno: 'Rodriguez',
            fechaNacimiento: 'Rodriguez',
            dirreccion: {
                viaPrincipal: 'Calle',
                numeroVia: 43,
                nombreVia: 'San pedro',
                placa: 'Villa Magna',
                location: 'Sur Oriente',
                comuna: '16'

            }
        }


    },
    fixNombreCompleto(){
        console.log(`Mi nombre completo es ${this.marca} de ${this.caracteristicas.dueno.apellidoPaterno } ${this.caracteristicas.dueno.apellidoMaterno}`)
    },
    fixCompleto(){
        console.log(this)
    }
};


let obj = Object.create(vehiculo);

obj.marca =  'BMW';
obj.caracteristicas.dueno.apellidoPaterno = 'Cangrejo'; 
obj.caracteristicas.dueno.apellidoMaterno = 'Perafan'; 


obj.fixNombreCompleto();
vehiculo.fixCompleto();









