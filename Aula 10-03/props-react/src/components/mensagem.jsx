

export default function Mensagem(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <p>{props.text} <span>{props.nome}</span></p>
        </>
    )
}