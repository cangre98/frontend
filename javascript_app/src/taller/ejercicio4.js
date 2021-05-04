
// npm install readline-sync     //instalar dependencia para que funcione la lectura por teclado
var readline = require('readline-sync');

var numero = readline.question("Ingrese el numero ");
var digito = readline.question("Ingrese el digito ");

if(numero.includes(digito)){
    console.log(`(${digito}) SI esta en ${numero}`);
}else{
    console.log(`(${digito}) NO esta en ${numero}`);
}






