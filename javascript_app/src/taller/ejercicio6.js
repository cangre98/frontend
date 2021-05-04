
// npm install readline-sync     //instalar dependencia para que funcione la lectura por teclado
var readline = require('readline-sync');
let maxNumber = 0;
var numero = readline.question("Ingrese el numero ");

function esPrimo(numero){
    if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

console.log(esPrimo(numero)?`${numero} es primo`:`${numero} No es primo`);






