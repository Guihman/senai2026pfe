let idade = 14;
let salario = 1000;

// && = e, || = ou, !not 

   //false         false          true
if (idade >= 16 || idade >= 18 || salario > 0) {
    console.log('teste');
}

   //false         false          false
if (idade >= 16 || idade >= 18 || salario == 0) {
    console.log('teste');
}
   //false         true          false
if (idade >= 16 || !idade >= 18 || salario == 0) {
    console.log('teste');
}
