import React from "react";
import { Routes, Route } from "react-router-dom"

import Home from "../components/home/home";
import MenaceRegister from "../components/menaceRegister/menaceRegister";
import MenaceReport from "../components/menaceReport/menaceReport";
import MenaceHistory from "../components/menaceHistory/menaceHistory";

const RoutesApp = () => {
    return (
        <Routes>
            <Route index element={<Home/>} path="/"/>
            <Route element={<MenaceRegister/>} path="/menaceRegister" />
            <Route element={<MenaceReport/>} path="/menaceReport" />
            <Route element={<MenaceHistory/>} path="/menaceHistory"/>
        </Routes>
    )
}

export default RoutesApp