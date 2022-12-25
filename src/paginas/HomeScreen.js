import React, { Fragment } from "react";
import Header from "../componentes/header/Header";
import Footer from "../componentes/footer/Footer";
import Card from "../componentes/shared/Card";
import '../paginas/styles.css'

const Home = () => {

    return <Fragment>
        <Header/>
        <main className="main">
            <Card src="teste" alt="teste" nome="Primeiro card"/>
            <Card src="teste" alt="teste" nome="Primeiro card"/>
        </main>
        <Footer/>
    </Fragment>
}

export default Home;