const prompt = require("prompt-sync")();
let num1 = Number(prompt("Digite o Número = "));

if (num1 <= 12) {
  console.log("Criança");
} else if (num1 < 18) {
  console.log("Adolescente");
} else if (num1 >= 18 && num1 <= 60) {
  console.log("Adulto");
} else{
  console.log("Idoso");
}
