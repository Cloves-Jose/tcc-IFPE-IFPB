import React from "react";
import Main from "../template/Main";
import Map from "../map/Map";

export default (props) => {

    return (
        <Main icon="home" title="Início" subtitle="Focos de ameaças.">
            <Map/>
            {/* <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p> */}
        </Main>
    )
}