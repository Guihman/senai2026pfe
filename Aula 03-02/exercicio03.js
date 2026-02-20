const prompt = require('prompt-sync')();
let num1 =Number(prompt('Digite o Primeiro número = '));
let num2 =Number(prompt('Digite o Segundo número = '));
let num3 =Number(prompt('Digite o Terceiro número = '));

let media =((num1 + num2 + num3)/3)

console.log('A Média Aritmética = ' + media)