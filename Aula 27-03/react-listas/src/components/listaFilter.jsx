const estudantes = [
    {id: 1,nome: 'Guilherme', idade:17,ra:189900, disciplina: 'Ed. Fisica'},
    {id: 2,nome: 'Pedro', idade:17,ra:189911, disciplina: 'Fisica'},
    {id: 3,nome: 'Miguel', idade:17,ra:189922, disciplina: 'LP'}
]

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Ed. Fisica')
    const listaEstudantes = lista.map((estudante) =>{
        return <li>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>{estudante.ra}</p>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaEstudantes}
        </ul>
        
        </>
    )
}