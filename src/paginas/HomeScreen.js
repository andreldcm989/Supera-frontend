import React, { Fragment } from "react";
import Footer from "../componentes/footer/Footer";
import Header from "../componentes/header/Header";
import Card from "../componentes/shared/Card";
import '../paginas/styles.css';

const Home = () => {
    
    return <Fragment>
        <Header/>
        <main className="main">
            <Card link="/contas" nome="Contas"/>
        </main>
        <Footer/>
    </Fragment>
}

export default Home;