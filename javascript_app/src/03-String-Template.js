console.log('+-------------------------String Template-------------------+')

const apellido = 'Rodriguez';
let nombre = 'Harlold Adrian';

let variableNum = 11;

console.log('Señor '+apellido+' su multiplicacion es: '+(variableNum*7));

console.log(`Señor ${ apellido} su multiplicacion es: ${variableNum *7} `);


console.log(` LLamado a una funcion desde Striing  Template ==> ${fx_randomico('XYZ')}`)

function fx_randomico(parmString){

    return `Numero random: ${Math.random()*100} Paramtro >>>>> ${parmString}`;
}








