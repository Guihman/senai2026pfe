class Produto {
    #nome;
    #preco;
    #estoque;

    constructor(nome, preco, estoque) {

        if (preco < 0) {
            return 'Erro: O preço não pode ser negativo.';
        }

        if (estoque < 0) {
            return 'Erro: O estoque não pode ser negativo.';
        }

        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }
    getNome() {
        return this.#nome;
    }

    getPreco() {
        return this.#preco;
    }

    getEstoque() {
        return this.#estoque;
    }

    aplicarDesconto(percentual) {
        this.#preco -= (this.#preco * percentual / 100);
    }

    valorEmEstoque() {
        return this.#preco * this.#estoque;
    }

    mostrar() {
        return `Produto: ${this.#nome} , Preço: R$ ${this.#preco.toFixed(2)} , Estoque: ${this.#estoque} , Valor total em estoque: R$ ${this.valorEmEstoque().toFixed(2)}`;
    }
}

const produto1= new Produto('Pokebola',45.9,3);
const Produto2= new Produto('Pokedex',45.9,3);
Produto2.valorEmEstoque(4);
produto1.aplicarDesconto(30);
produto1.valorEmEstoque(4);
console.log(produto1.mostrar());
console.log(Produto2.mostrar());