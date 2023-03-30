import React from "react";
import "./Nav.css"

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

export default (props) => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <a href="#/">
                    <i className="fa fa-home"></i> Início
                </a>
                <a href="#/users">
                    <i className="fa fa-users"></i> Usuários
                </a>
            </nav>
        </aside>
    )
}