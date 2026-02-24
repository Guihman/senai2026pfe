class Cidade{
    qtdeHabitantes=45.000;
    estado="SP";
    nome="Nelorelândia";

    mostrar(){
        console.log("O nome da Cidade é " + this.nome)
        console.log("O nome do Estado é " + this.estado)
        console.log("A quantidade de Habitantes é " + this.qtdeHabitantes)
    }
}

const municipio = new Cidade();
municipio.mostrar();