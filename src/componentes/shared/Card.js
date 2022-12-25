import React from "react";
import '../shared/styles.css'

const Card = (props) => {
    return <div className="card-home">
        <img src={props.src} alt={props.alt} />
        <h3>{props.nome}</h3>
    </div>
}

export default Card;