const prompt = require("prompt-sync")();
let num1 = prompt("Digite um Número Qualquer: ");
 

if (Math.random()==num1){
    console.log('Os Números são Iguais ' + num1 +' = ' + Math.random())
}else{
    console.log('Os Números são Diferentes ' + num1 +' = ' + Math.random())
}