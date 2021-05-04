
// npm install readline-sync     //instalar dependencia para que funcione la lectura por teclado
var readline = require('readline-sync');
let maxNumber = 0;
var numero = readline.question("Ingrese el numero ");

let numeros = numero.split("")
console.log(numeros);

numeros.forEach(element => {
    if(Number.isInteger(Number(element))){
        maxNumber = Number(element)>maxNumber?Number(element):maxNumber; //if ternario
    }    
});

console.log(`${maxNumber} es el valor Mayor`);






