const prompt = require("prompt-sync")();
let resp1 =Number(prompt('Digite o Primeiro número = '));
let resp2 =Number(prompt('Digite o Segundo número = '));
let resp3 =(prompt('Digite o caractere para operação Matemática = '));

if (resp3 === '+'){
    console.log(resp1 + resp2)
}
else if(resp3 === '-'){
    console.log(resp1-resp2)
} else if(resp3 === '*'){
    console.log(resp1*resp2)
}else if(resp3 === '/'){
    console.log(resp1/resp2)
}