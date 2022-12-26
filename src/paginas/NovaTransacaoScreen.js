import React, { Fragment } from "react";
import NovaTransacao from "../componentes/NovaTransacao";
import Footer from "../componentes/footer/Footer";
import Header from "../componentes/header/Header";
import '../paginas/styles.css';

const NovaTransacaoScreen = () => {
    return <Fragment>
        <Header/>
        <main className="main">
            <NovaTransacao/>
        </main>
        <Footer/>
    </Fragment>
}

export default NovaTransacaoScreen;