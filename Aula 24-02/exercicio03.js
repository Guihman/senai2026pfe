class Bicicleta {
  #modelo;
  #marca;
  #cor;
  #velocidadeMaxima;

  setModelo(valor) {
    this.#modelo = valor;
  }
  getModelo() {
    return this.#modelo;
  }

  setMarca(valor) {
    this.#marca = valor;
  }
  getMarca(valor) {
    return this.#marca;
  }

  setCor(valor) {
    this.#cor = valor;
  }
  getCor(valor) {
    return this.#cor;
  }

  setVelocidadeMaxima(valor) {
    if (valor > 35) {
      console.log("VELOCIDADE NÃO PERMITIDA!");
    } else {
      this.#velocidadeMaxima = valor;
    }
  }
  getVelocidadeMaxima(valor) {
    return this.#velocidadeMaxima;
  }
}

const bike = new Bicicleta();

bike.setModelo("Monareta Mirim");
bike.setMarca("Monark");
bike.setCor("Amarela");
bike.setVelocidadeMaxima(40);
console.log("O modelo da  bike é: " + bike.getModelo());
console.log("A marca da bike é: " + bike.getMarca());
console.log("A cor da bike é: " + bike.getCor());
console.log(
  "A velocidade máxima que sua bike pode ir (em km/h) é: " + bike.getVelocidadeMaxima(),
);
