import React from "react";
import "./Nav.css"

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

export default (props) => {
    return (
        <aside className="menu-area">
            <Sidebar>
                <Menu>
                    <MenuItem> Home </MenuItem>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts</MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </aside>
    )
}