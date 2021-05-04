
// npm install readline-sync     //instalar dependencia para que funcione la lectura por teclado
var readline = require('readline-sync');
let nuevaCadena = "";

var numero = readline.question("Ingrese el numero a invertir: ");

//Funciones de JS
console.log(numero.split("").reverse().join(""));

//Logica 
for (let x = numero.length - 1; x >= 0; x--) {
    nuevaCadena += numero[x];
}
console.log(nuevaCadena);
