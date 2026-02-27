class Animal {
  especie;
  #genero;
  #qtdeIndividuos;
  #nome;

  constructor(especie, genero, qtde, nome) {
    this.especie = especie;
    this.#genero = genero;
    this.#qtdeIndividuos = qtde;
    this.#nome = nome;
  }

  setGenero(valor) {
    this.#genero = valor;
  }
  getGenero() {
    return this.#genero;
  }

  setQtdeIndividuos(valor) {
    this.#qtdeIndividuos = valor;
  }
  getQtdeIndividuos() {
    return this.#qtdeIndividuos;
  }

  setNome(valor) {
    this.#nome = valor;
  }
  getNome() {
    return this.#nome;
  }
}

const panda = new Animal("urso", "fêmea", 2, "Peppa e Pig");

panda.setGenero("Fêmea");
panda.setQtdeIndividuos(2);
panda.setNome("Peppa e Pig");

console.log("O Gênero dos Pandas é: " + panda.getGenero());
console.log("A Quantidades de Pandas é: " + panda.getQtdeIndividuos());
console.log("O Nome dos Pandas é: " + panda.getNome());
