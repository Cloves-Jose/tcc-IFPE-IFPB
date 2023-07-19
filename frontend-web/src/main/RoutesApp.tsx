import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "../components/home/home";
import MenaceRegister from "../components/menaceRegister/menaceRegister";
import MenaceReport from "../components/menaceReport/menaceReport";
import MenaceHistory from "../components/menaceHistory/menaceHistory";
import MenagerMenace from "../components/menagerMenace/menagerMenace";

const RoutesApp = () => {

    return (
        <Routes>
            <Route index element={<Home/>} path="/"/>
            <Route element={<MenagerMenace/>} path="/menagerMenace"/>
            <Route element={<MenaceRegister/>} path="/menaceRegister" />
            <Route element={<MenaceReport/>} path="/menaceReport" />
            <Route element={<MenaceHistory/>} path="/menaceHistory"/>
        </Routes>
    )
}

export default RoutesApp