let dataAtual = new Date();
let fimDoAno = new Date(dataAtual.getFullYear(), 11, 31);
let diferenca = fimDoAno - dataAtual;

console.log("Faltam " + diferenca + " dias para o fim do ano.");