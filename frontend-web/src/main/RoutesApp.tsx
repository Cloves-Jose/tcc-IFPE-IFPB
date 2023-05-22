import React from "react";
import { Routes, Route } from "react-router-dom"

import Home from "../components/home/home";
import MenaceTabs from "../components/templates/MenaceTabs";
import MenaceRegister from "../components/menaceRegister/menaceRegister";
import MenaceReport from "../components/menaceReport/menaceReport";

const RoutesApp = () => {
    return (
        <Routes>
            <Route index element={<Home/>} path="/"/>
            <Route element={<MenaceRegister/>} path="/menaceRegister" />
            <Route element={<MenaceReport/>} path="/menaceReport" />
        </Routes>
    )
}

export default RoutesApp