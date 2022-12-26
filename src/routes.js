import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeScreen from "./paginas/HomeScreen";
import ContasScreen from "./paginas/ContasScreen";
import TransacoesScreen from "./paginas/TransacoesScreen";
import NovaTransacaoScreen from "./paginas/NovaTransacaoScreen";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/contas" element={<ContasScreen />} />
            <Route path="/contas/:idConta/transacoes" element={<TransacoesScreen />} />
            <Route path="/contas/:idConta/transacoes/novaTransacao" element={<NovaTransacaoScreen />} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;