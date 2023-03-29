import React from "react";
import "./Main.css";
import Home from "../screens/Home";

import Header from "./Header";


export default (props) => {
    return (
        <>
            <Header {...props}/>
            <main className="content">
                {props.children}
            </main>
        </>
    )
}