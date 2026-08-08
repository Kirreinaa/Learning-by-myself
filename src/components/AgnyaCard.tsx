import './Card.css'
import AgnyaButton from "./AgnyaButton"

type AgnyaCardProps = {
    name: string;
    description: string;
    skills: string;
    button: string;
    image: string;
}

function AgnyaCard(props: AgnyaCardProps) {

    return(
        <div className="card">
            <img src={props.image} alt={props.name}/>

            <h1>{props.name}</h1>

            <p className="description">
                {props.description}
            </p>

            <span className="skills">
                {props.skills}
            </span>

            <AgnyaButton text={props.button}/>
        </div>
    )
}

export default AgnyaCard;