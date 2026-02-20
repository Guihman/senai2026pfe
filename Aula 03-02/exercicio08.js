const prompt = require("prompt-sync")();
let num1 = Number(prompt("Digite a Nota de 0 A 100 = "));

if (num1 >= 90) {
  console.log("A");
} else if (num1 >=80 ) {
  console.log("B");
} else if (num1 >=70) {
  console.log("C");
} else{
  console.log("F");
}
