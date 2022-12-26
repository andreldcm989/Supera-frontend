import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {

    return <Fragment>
        <header>
            <h2>Bankline Supera</h2>
            <nav>
                <Link to="/">
                    <button className="nav-button">Home</button>
                </Link>
                <Link to="/contas">
                    <button className="nav-button">Contas</button>
                </Link>
            </nav>
        </header>
    </Fragment>
}

export default Header;