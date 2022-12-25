import React, { Fragment } from "react";
import Header from "../componentes/header/Header";
import Footer from "../componentes/footer/Footer";
import Card from "../componentes/shared/Card";
import '../paginas/styles.css'

const Home = () => {
    
    return <Fragment>
        <Header/>
        <main className="main">
            <Card link="/contas" src="teste" alt="teste" nome="Contas"/>
            <Card link="/transacoes" src="teste" alt="teste" nome="Transações"/>
            <Card link="/contas/abrirConta" src="teste" alt="teste" nome="Abrir Conta"/>
        </main>
        <Footer/>
    </Fragment>
}

export default Home;