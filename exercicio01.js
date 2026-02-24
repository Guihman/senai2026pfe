class Livro{
    titulo ="Arsène Lupin, Gentleman-Cambrioleur";
    autor="Maurice Leblanc";
    ano=1907;
    editora="Pierre Lafitte";
    paginas=220;
    capitulos=9;
    genero="Policial / Suspense / Aventura.";
    idioma="Francês";

    mostrar(){
    console.log(this.autor);//chamada de atributo
}
}

const impressao = new Livro();
impressao.mostrar();