import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeScreen from "./paginas/HomeScreen";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<HomeScreen />} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;