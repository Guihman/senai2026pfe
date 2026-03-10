

export default function MeuAvatar({nome, idade, foto, estiloMusical, disciplinaFavorita}){
    return(
        <>
        <h1>Olá eu sou o {nome}</h1>
        <p>Eu tenho {idade} anos de idade <span>esta é a minha foto de perfil <img src={foto} alt="" /></span></p>
        <p>Meu estilo musical favorito é: {estiloMusical}</p>
        <p>Minha disciplina favorita é {disciplinaFavorita}</p>
        </>
    )
}