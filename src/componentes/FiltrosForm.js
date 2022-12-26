import React from "react";

const Filtros = () => {

    return <div className="pesquisa">
        <form className="pesquisa-form">
            <div className="campos">
                <label htmlFor="inicio">Data Inicio: </label>
                <input type="date" name="inicio" />
            </div>
            <div className="campos">
                <label htmlFor="fim">Data Fim: </label>
                <input type="date"  name="fim" />

            </div>
            <div className="campos">
                <label htmlFor="operador">Nome Operador Transacionado: </label>
                <input type="text" />
            </div>
            <div className="campos">
                <input type="button" value="Pesquisar" />
            </div>
        </form>
    </div>
}

export default Filtros;