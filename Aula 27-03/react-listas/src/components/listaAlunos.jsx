const alunos = [
    {id:0, nome: "Ana", nota: 7, fotoperfil: "https://randomuser.me/api/portraits/women/56.jpg" },
    {id:1, nome: "Bruno", nota: 4, fotoperfil: "https://randomuser.me/api/portraits/men/25.jpg"},
    {id:2, nome: "Carla", nota: 9, fotoperfil: "https://randomuser.me/api/portraits/women/9.jpg"},
    {id:3, nome: "Diego", nota: 5, fotoperfil: "https://randomuser.me/api/portraits/men/64.jpg"},
    {id:4, nome: "Eduarda", nota: 8, fotoperfil: "https://randomuser.me/api/portraits/women/50.jpg"}
]

export default function ListaAlunos({titulo}){
    const lista = alunos.filter(aluno => aluno.nota >= 6)
    const ListaAlunos = lista.map((aluno) =>{
        return <li>
            <h3>{aluno.nome}</h3>
            <p>{aluno.idade}</p>
            <p>{aluno.nota}</p>
            <img src={aluno.fotoperfil} alt="" />
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {ListaAlunos}
        </ul>
        
        </>
    )
}