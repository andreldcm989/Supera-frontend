import React, { Fragment, useEffect, useState } from "react";
import '../componentes/formNovaTransacao.css';
import { useNavigate, useParams } from "react-router-dom";

const API = "http://localhost:8080/api";

const api = async () => {
    let response = await fetch(`${API}/tiposTransacoes`);
    let dados = await response.json();
    return dados;
}

const postarTransacao = async (transacao, tipo) => {
    let response = await fetch(`${API}/contas/${transacao.idConta}/transacoes/${tipo.toLowerCase()}`, {
        method: "POST",
        body: transacao,
        headers: {
            "Content-type": "application/json",
        }
    });
    let dados = await response.json();
    return dados;
}

const NovaTransacao = () => {
    let { idConta } = useParams();
    const [tipos, setTipos] = useState([]);
    const [selecao, setSelecao] = useState(1);
    const [campos, setCampos] = useState({
        idTipoTransacao: selecao,
        idConta: Number.parseInt(idConta),
        idContaDestino: 0,
        valor: 0
    });

    let navigate = useNavigate();

    const escutaCampos = (e) => setCampos({
        ...campos,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const realizaTransacao = (e) => {
        e.preventDefault();
        let objeto = JSON.stringify(campos);
        let nomeTipo = tipos.filter(tipo => tipo.id === selecao).map(tipo => tipo.nome).toString().toLowerCase();
        postarTransacao(objeto, nomeTipo).then(() => {
            navigate(`/contas/${idConta}/transacoes`);
        });
    }

    useEffect(() => {
        api().then((dados) => {
            setTipos(dados);
        })
    }, []);

    const verificaTipo = (e) => {
        setSelecao(Number.parseInt(e.target.value));
    };

    const transferencia = () => {
        if (selecao === 3) {
            return <Fragment>
                <div className="campos">
                    <label htmlFor="idContaDestino"> ID conta Destino</label>
                    <input name="idContaDestino" type="number" min="1" onChange={escutaCampos} required />
                </div>
            </Fragment>
        }
    };

    return <Fragment>
        <div className="container">
            <h2>Escolha o tipo de transação que deseja realizar e preencha os dados</h2>
            <form onSubmit={realizaTransacao}>
                <div>
                    <div className="campos">
                        <label>Selecione o tipo da transação: </label>
                        <select name="tipo" onChange={verificaTipo}>
                            {tipos.map((tipo, index) =>
                                <option key={index} value={Number.parseInt(tipo.id)}>{tipo.nome}</option>
                            )}
                        </select>
                    </div>
                    <div className="campos" id="tipo">
                        <label htmlFor="idTipoTransacao">ID Tipo Transação</label>
                        <input name="idTipoTransacao" type="number" value={selecao} onChange={escutaCampos} readOnly />
                    </div>
                    <div className="campos">
                        <label htmlFor="idConta">Id Conta</label>
                        <input name="idConta" type="number" value={ Number.parseInt(idConta) } onChange={escutaCampos} readOnly required />
                    </div>
                    {transferencia()}
                    <div className="campos">
                        <label htmlFor="valor">Valor (R$) </label>
                        <input name="valor" type="number" min="1" step="0.01" value={Number.parseFloat(campos.valor)} onChange={escutaCampos} required />
                    </div>
                    <div className="campos">
                        <button type="submit" className="botoes">Efetuar Transação</button>
                        <button className="botoes">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    </Fragment>
}

export default NovaTransacao;