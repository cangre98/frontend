
// npm install readline-sync     //instalar dependencia para que funcione la lectura por teclado
var readline = require('readline-sync');

var numero = readline.question("Ingrese el numero ");

let invert = numero.split("").reverse().join("");

if(invert == numero){
    console.log("Es capicua");
}else{
    console.log("NO es capicua");
}


