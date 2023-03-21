import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { AiOutlineMenu } from "react-icons/ai";


export default (props) => {

    const { collapseSidebar } = useProSidebar()

    return (
        <div style={{ display: 'flex', height: "100%" }}>
            <Sidebar>
                <Menu>
                    <MenuItem rootStyles={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => collapseSidebar()}> 
                        <AiOutlineMenu/>
                    </MenuItem>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}