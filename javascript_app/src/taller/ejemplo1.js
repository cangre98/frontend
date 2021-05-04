
// npm install readline-sync     //instalar dependencia para que funcione la lectura por teclado

let run = true;

var readline = require('readline-sync');

while (run) {
    var opt = readline.question("Desea finalizar ejecucion : (s) o (n) : ");

    if(opt.toLowerCase() == 'n'){
        run = false;
        console.log('finaliza....')

    }else if(opt.toLowerCase() == 's'){
        run = false;
        console.log('finaliza....')
    }else{
        console.log('Continua la ejecucion.')
    }
}

