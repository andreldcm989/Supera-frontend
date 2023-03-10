import React, { Fragment } from "react";
import Contas from "../componentes/Contas";
import Footer from "../componentes/footer/Footer";
import Header from "../componentes/header/Header";
import '../paginas/styles.css';

const ContasScreen = () => {
    return <Fragment>
        <Header/>
        <main className="main">
            <Contas/>
        </main>
        <Footer/>
    </Fragment>
}

export default ContasScreen;