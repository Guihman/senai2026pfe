const prompt = require("prompt-sync")();
let num1 =Number(prompt('Digite seu peso em Kg = '))
let num2 =Number(prompt('Digite sua Altura em Metros = '))

let imc =(num1 / (num2 ** 2))

if (imc < 18.5){
    console.log('Abaixo do peso')
} else if(imc >= 18.5 && imc < 25){
    console.log('Normal')
} else if (imc >= 25 && imc < 30){
    console.log('SobrePeso')
} else{
    console.log('Obesidade')
}