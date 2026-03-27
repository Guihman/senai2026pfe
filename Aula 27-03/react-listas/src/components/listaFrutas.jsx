const frutas = [
    {fruta1: 'Maçã'},
    {fruta2: 'Banana'},
    {fruta3: 'Pêra'},
    {fruta4: 'Abacaxi'} ,
    {fruta5: 'Manga'}
];

export default function ListaFrutas({titulo}){
    const ListaFrutas = frutas.map((fruta) =>{
        return <li>
            <p>{fruta.fruta1}</p>
            <p>{fruta.fruta2}</p>
            <p>{fruta.fruta3}</p>
            <p>{fruta.fruta4}</p>
            <p>{fruta.fruta5}</p>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {ListaFrutas}
        </ul>
        
        </>
    )
}