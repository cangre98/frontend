
// npm install readline-sync     //instalar dependencia para que funcione la lectura por teclado
var readline = require('readline-sync');
let suma = 0;
var numero = readline.question("Ingrese el numero a sumar: ");

let numeros = numero.split("")
console.log(numeros);

numeros.forEach(element => {
    if(Number.isInteger(Number(element))){
        suma = suma+Number(element) 
    }else{
        console.log("No se Suma no es numero = "+element);
    }
    
});
console.log("SUMA = "+suma);
