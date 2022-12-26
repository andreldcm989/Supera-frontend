import React from "react";
import { Link } from 'react-router-dom';
import '../shared/styles.css'

const Card = (props) => {

    return <Link to={props.link}>
        <div className="card-home">
            <h3>{props.nome}</h3>
        </div>
    </Link>
}

export default Card;