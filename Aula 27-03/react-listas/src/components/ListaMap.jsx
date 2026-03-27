const estudantes = [
    {id: 1,nome: 'Guilherme', idade:17,ra:189900},
    {id: 2,nome: 'Pedro', idade:17,ra:189911},
    {id: 3,nome: 'Miguel', idade:17,ra:189922}
]

export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudante) =>{
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