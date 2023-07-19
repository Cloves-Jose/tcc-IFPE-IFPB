import React from "react"
import { faHome, faShield, faFileCircleCheck, faClockRotateLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
import "./Nav.css"

import Logo from "./Logo"
import MenuItem from "../menuComponent/MenuItem";

const Nav = () => {
    return (
        <aside className="menu-area">
            <Logo/>
            <nav>
                <MenuItem href="/" icon={faHome} title="Home"/>
                <MenuItem href="/menagerMenace" icon={faCheck} title="Gerenciar ameaças"/>
                <MenuItem href="/menaceRegister" icon={faShield} title="Ameaças"/>
                <MenuItem href="/menaceHistory" icon={faClockRotateLeft} title="Histórico"/>
                <MenuItem href="/menaceReport" icon={faFileCircleCheck} title="Relatório de ameaças"/>
            </nav>
        </aside>
    )
}

export default Nav