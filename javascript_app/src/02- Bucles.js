console.log("+----------------BUCLES----------------+");

let limiteBucle = 10;
let contador = 0;

console.log("+ Bucle: Do While +");
do {
    contador++;
    console.log('Contador: ' + contador);
} while (contador < limiteBucle);
console.log("+----------------while----------------+");
let letCondicion = true;
let letAcumulado = 0;
let letNumCiclo = 0;


while(letCondicion){
    let letRandom = Math.random()*10;
    console.log('Numero Randomico: '+letRandom);
    letNumCiclo++;
    if(letRandom >7){
        letCondicion = false;
        console.log('Salida del bucle: '+letCondicion);
    }
    letAcumulado=letRandom+letAcumulado;
}
console.log('Total Ciclos: '+letNumCiclo);
console.log('Total Acumulado: '+letAcumulado);

console.log("+----------------FOR----------------+");
var limiteFor = 10;

var listString = ['A','B','C','D','E','F']

for (let index = 0; index < listString.length; index++) {   
    console.log(listString[index]);
    
}


listString.forEach(element => {
    console.log('forEach: '+element);
});