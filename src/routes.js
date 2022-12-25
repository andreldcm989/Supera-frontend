import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeScreen from "./paginas/HomeScreen";
import ContasScreen from "./paginas/ContasScreen";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/contas" element={<ContasScreen />} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;