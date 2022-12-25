import React, { Fragment } from "react";
import Transacoes from "../componentes/Transacoes";
import Footer from "../componentes/footer/Footer";
import Header from "../componentes/header/Header";
import '../paginas/styles.css';

const TransacoesScreen = () => {
    return <Fragment>
        <Header/>
        <main className="main">
            <Transacoes/>
        </main>
        <Footer/>
    </Fragment>
}

export default TransacoesScreen;