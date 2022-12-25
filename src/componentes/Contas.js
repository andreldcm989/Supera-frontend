import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../paginas/styles.css';

const API = "http://localhost:8080/api/contas";

const api = async () => {
    let response = await fetch(API);
    let dados = await response.json();
    return dados;
}

const Contas = () => {
    const [contas, setContas] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        api().then((dados) => {
            setContas(dados);
        })
    }, [])

    return <Fragment>
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
                            <td><input type="button" name={index} value="Editar" /></td>
                            <td><input type="button" name="transacao" value="Transações" onClick={() => navigate(`/contas/${conta.id}/transacoes`)}/></td>
                            <td><input type="button" name={index} value="Excluir" /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </Fragment>
}

export default Contas;