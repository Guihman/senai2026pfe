const prompt = require('prompt-sync')();
let idade = Number(prompt("Digite a Sua Idade: "));

if (idade <= 16) {
    console.log("Vaza Daqui Se Mequetrefe");
} else if (idade >= 18) {
    console.log("Você é maior de idade, Pegue um Livro");
} else {
    console.log("Pegue algum livro jovem Padawan");
}
