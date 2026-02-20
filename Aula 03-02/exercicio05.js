const prompt = require("prompt-sync")();
let num1 =Number(prompt('Digite o Primeiro número = '));
let num2 =Number(prompt('Digite o Segundo número = '));

if(num1 > num2){
    console.log('O Número ' + num1 +' É o Maior ')
} else {
    console.log('O Número '+ num2+ ' É o Maior Número')
}