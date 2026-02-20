const prompt = require("prompt-sync")();
let num1 = Number(prompt("Digite O Valor = "));
let cup = prompt("Digite o Nome do Cupom = ");

if (cup === "BRONZE") {
  console.log("O Valor é Igual a = " + num1 * 0.095);
} else if (cup === "PRATA") {
  console.log("O Valor é Igual a = " + num1 * 0.9);
} else if (cup === "OURO") {
  console.log("O Valor é Igual a = " + num1 * 0.85);
} else {
  console.log("cupom inválido, sem desconto.");
}
