const prompt = require('prompt-sync')();
let num1 =parseFloat(prompt('Digite o Número = '));

if (num1 % 2 === 0){
    console.log('O Número é Par')
} else {
    console.log('O Número é Impar')
}

