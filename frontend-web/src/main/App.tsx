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
import InformationContext from '../context/information-context';
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
// import LoginModal from '../components/loginModal/loginModal';
import LoginPage from '../components/loginPage/loginPage';
import UserRegister from '../components/userRegister/userRegister';


const server = process.env.REACT_APP_LOCAL

const App = () => {

    const [geolocation, setGeolocation] = useState<any[]>([])
    const [currentInfo, setCurrentInfo] = useState<any[]>([])
    const [token, setToken] = useState()

    const queryClient = new QueryClient()

    /**
     * Pega as coordenadas do mapa e envia via contexto
     */
    // useEffect(() => {
    //     const getGeolocation = async () => {
    //         await axios.get(`${server}/getGeolocation`)
    //         .then((res) => {
    //             setGeolocation(res.data)
    //         }) 
    //         .catch((e) => {
    //             console.error(e)
    //         })
    //     }
    //     getGeolocation()
    // }, [])

    if (!token) {
        return (
            <LoginPage/>
        )
    }

    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                {/* <ReactQueryDevtools initialIsOpen={false}/> */}
                <InformationContext.Provider value={{ currentInfo, setCurrentInfo }}>
                    <MapContext.Provider value={{ geolocation, setGeolocation }}>
                            <Nav/>
                            <RoutesApp/>
                    </MapContext.Provider>
                </InformationContext.Provider>
            </QueryClientProvider>
        </div>
    )
}

export default App