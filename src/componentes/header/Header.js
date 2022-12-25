import React, { Fragment } from "react";
import './header.css';

const Header = () => {

    return <Fragment>
        <header>
            <h2>Bankline Supera</h2>
            <nav>
                <button >Home</button>
                <button>Contas</button>
                <button>Transações</button>
            </nav>
        </header>
    </Fragment>
}

export default Header;