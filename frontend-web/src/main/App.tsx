import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import "./App.css"

import RoutesApp from "./RoutesApp";
import Nav from "../components/templates/Nav";
import { useEffect, useState } from 'react';
import axios from 'axios';
import MapContext from '../context/map-context';

const server = process.env.REACT_APP_LOCAL

const App = () => {

    const [geolocation, setGeolocation] = useState<any[]>([])

    /**
     * Pega as coordenadas do mapa e envia via contexto
     */
    useEffect(() => {
        const getGeolocation = async () => {
            await axios.get(`${server}/getGeolocation`)
            .then((res) => {
                setGeolocation(res.data)
            }) 
            .catch((e) => {
                console.error(e)
            })
        }
        getGeolocation()
    }, [])

    return (
        <div className="app">
            <MapContext.Provider value={{ geolocation, setGeolocation }}>
                <Nav/>
                <RoutesApp/>
            </MapContext.Provider>
        </div>
    )
}

export default App