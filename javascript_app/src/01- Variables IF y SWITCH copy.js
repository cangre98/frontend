//Variables y constantes
console.log("Alcance de Varaiables");

var variableGlobal = 'Variable de alcance Global';
const varconstante = 'Cosntante durante ejecucion';
let varLetLocal = 'ABC';
let varLetNumero = 1112;


console.log('Variable Global 1. ' + variableGlobal);
console.log('Cosntante = ' + varconstante);

{
    variableGlobal = 'Otro valor';
    console.log('Varariable global 2. ' + variableGlobal);
    let varLetLocal = 'ABC';

}
console.log('+---------------EVALUACION---------------------------+')
let evaluacionIF = true;
if (evaluacionIF) {
    console.log('Dentro del IF');
    let letNumeroY = 11;
    let letNumeroX = 76;

    console.log('Operacion * = ' + (letNumeroX * letNumeroY));

} else {
    console.log('Estamos en el else del IF')
}

let letKey = 3;

console.log('+---------------SELECTOR---------------------------+')
switch (letKey) {
    case 1:
        console.log('Caso para 1')
        break;

    case 3:
        console.log('Caso para 3')
        break;

    default:
        console.log('Valor no determinadoen el selector')
        break;
}
