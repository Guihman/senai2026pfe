const prompt = require("prompt-sync")();
let cracha = prompt("Você Possui Crachá: ");
let uniforme = prompt("Você Possui Uniforme: ");
let Monitor = prompt("Você é Monitor: ");
let Cadastro = prompt("Você Possui Cadrasto: ");

if ((cracha == "sim" && uniforme == "sim") || Monitor == "sim") {
  if (Cadastro == "sim") {
    console.log("Acesso Liberado");
  } else {
    console.log("Você não possui cadastro!");
  }
} else {
  console.log("Acesso Negado");
}
