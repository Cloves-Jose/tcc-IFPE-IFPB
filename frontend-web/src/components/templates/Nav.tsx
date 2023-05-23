import React from "react"
import { faHome, faShield, faFileCircleCheck, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
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
                <MenuItem href="/menaceRegister" icon={faShield} title="Ameaças"/>
                <MenuItem href="/#" icon={faClockRotateLeft} title="Histórico de ameaça"/>
                <MenuItem href="/menaceReport" icon={faFileCircleCheck} title="Relatório de ameaças"/>
            </nav>
        </aside>
    )
}

export default Nav