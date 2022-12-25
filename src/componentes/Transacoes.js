import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../paginas/styles.css';

const API = "http://localhost:8080/api/contas";

const api = async (idConta) => {
    let response = await fetch(`${API}/${idConta}/transacoes`);
    let dados = await response.json();
    return dados;
}

const Transacoes = () => {
    const [transacoes, setTransacoes] = useState([]);

    let { idConta } = useParams();

    useEffect(() => {
        api(idConta).then((dados) => {
            setTransacoes(dados);
        })
    }, [])

    if(transacoes.length === 0){
        return <Fragment>
            <h2>Nenhuma Transação foi realizada.</h2>
            <button>Nova Transação</button>
        </Fragment>
    }
    return <Fragment>
            <div className="lista-container">
            <table className="lista-table">
                <thead>
                    <tr>
                        <th>Saldo Atual: </th>
                        <th>Saldo no Período: </th>
                    </tr>
                    <tr>
                        <th>Conta</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Operador</th>
                        <th>Saldo atualizado</th>
                    </tr>
                </thead>
                <tbody>
                    {transacoes.map((transacao, index) => 
                        <tr key={index}>
                            <td>{transacao.idConta}</td>
                            <td>{transacao.dataOperacao}</td>
                            <td>{transacao.valor}</td>
                            <td>{transacao.tipo}</td>
                            <td>{transacao.nomeOperadorTransacao}</td>
                            <td>{transacao.saldoAtualizado}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </Fragment>
}

export default Transacoes;