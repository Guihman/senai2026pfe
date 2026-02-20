const prompt = require('prompt-sync')();
let Nascimento = new Date(prompt("Digite o Seu Ano de Nascimento "));


let Agora = new Date()
let result = (Agora.getFullYear() - (Nascimento.getFullYear()+1))
console.log(result)