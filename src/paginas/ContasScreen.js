import React, { Fragment, useState, useEffect } from "react";
import Footer from "../componentes/footer/Footer";
import Header from "../componentes/header/Header";
import '../paginas/styles.css';

const API = "http://localhost:8080/api/contas";

const api = async () => {
    let response = await fetch(API);
    let dados = await response.json();
    return dados;
}

const ContasScreen = () => {
    const [contas, setContas] = useState([]);

    useEffect(() => {
        api().then((dados) => {
            setContas(dados);
        })
    }, [])

    return <Fragment>
        <Header/>
        <main className="main">
            <div className="contas-container">

            <table className="contas-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titular</th>
                        <th colSpan="3">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((conta, index) => 
                        <tr key={index}>
                            <td>{conta.id}</td>
                            <td>{conta.titular}</td>
                            <td><input type="button" name={index} value="Editar"/></td>
                            <td><input type="button" name={index} value="Transações"/></td>
                            <td><input type="button" name={index} value="Excluir"/></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </main>
        <Footer/>
    </Fragment>
}

export default ContasScreen;