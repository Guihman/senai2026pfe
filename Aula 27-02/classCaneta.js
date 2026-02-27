class Caneta {
  cor = "amarela";
  marca = "Faber Castel";
  ponta = "fina";
  qtdeTinta = 10; //ml
  tampa = false;

  escrever() {
    this.qtdeTinta -= 1;
    return "Comecei a escrever";
  }
  //criar um método sublinhar, que recebe um parãmetro valor que sai representar a quantidade gasta de tinta ao sublinhar, desconte da quantidade de tinta e mostre a qtde restante, porém não permita que seja subtraida se o valor for maior do que a qtde de tinta da Classe


  //criar método recarregar que recebe um valor e soma esse valor a quantidade de tinta da classe, considerando que a qtde de tinta não pode ser maior do que 15ml
  getQtdeTinta() {
    return this.qtdeTinta;
  }

  sublinhar(valor) {
    if (this.qtdeTinta < valor) {
      return "Impossivel realizar essa operação";
    }
    (this, (qtdeTinta -= valor));
    return "A quantidade restante depois de sublinhar é " + this.qtdeTinta;
  }

  recarregar(valor){
   if ((this.qtdeTinta + valor) > 15){
    return 'Estourou a caneta';
}
 else ((this.qtdeTinta + valor) <= 15 )
    return 'A quantidade de tinta na caneta após recarregar é igual a ' + this.qtdeTinta;
 
}
}

const canetaFina = new Caneta();
canetaFina.escrever();
canetaFina.getQtdeTinta();
console.log("A qtde. restante de tinta é " + canetaFina.getQtdeTinta());
