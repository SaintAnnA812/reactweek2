
export default function Card(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.universe}</p>
            <h2>{props.alterego}</h2>
            <p>{props.occupation}</p>
            <h3>{props.friends}</h3>
            <p>{props.superpowers}</p>
            <img src="{props.url}"></img>
            <p>{props.info}</p>



        </div>
    )
}