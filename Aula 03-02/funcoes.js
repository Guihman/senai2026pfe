//primeiro tipo função padrão
function saudacao(nome, sobrenome){
    console.log('Olá, seja bem vindo ' + nome + ' ' + sobrenome)
}

saudacao('Guilherme', 'Machado');//Chamada da função

//Segundo tipo - função anônima
const somar = function(num1, num2){
    console.log('A soma dos números é = ' + (num1+num2));
}
somar(25, 35);

//Terceiro tipo - arrow function
const subtrair = (num1,num2)=> {
    console.log('A subtração dos números é = ' + (num1-num2));
}
subtrair(30,50);

//Terceiro tipo - arrow function
const subtrairComRetorno = (num1,num2)=> {
   return num1-num2;
}
console.log('A Subtração dos Números com Retorno é = ' + subtrairComRetorno(30,50));

