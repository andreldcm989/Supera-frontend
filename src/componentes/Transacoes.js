import React, { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import '../paginas/styles.css';
import Filtros from "./FiltrosForm";

const API = "http://localhost:8080/api/contas";

const api = async (idConta) => {
    let response = await fetch(`${API}/${idConta}/transacoes`);
    let dados = await response.json();
    return dados;
}

const Transacoes = () => {
    const [transacoes, setTransacoes] = useState([]);
    const [navegar, setNavegar] = useState(false);

    let { idConta } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        api(idConta).then((dados) => {
            setTransacoes(dados);
        }, error => {
            setNavegar(true);
        })
    }, [])

    if (navegar) {
        return <Navigate to="/" />
    }

    if (transacoes.length === 0) {
        return <Fragment>
            <div className="lista-vazia">
                <h2>Nenhuma Transação foi realizada.</h2>
                <input type="button" name="transacao" value="Nova Transação" onClick={() => navigate(`/contas/${idConta}/transacoes/novaTransacao`)} />
            </div>
        </Fragment>
    }
    return <Fragment>
        <div className="lista-container">
            <Filtros />
            <input type="button" name="transacao" value="Nova Transação" onClick={() => navigate(`/contas/${idConta}/transacoes/novaTransacao`)} />
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