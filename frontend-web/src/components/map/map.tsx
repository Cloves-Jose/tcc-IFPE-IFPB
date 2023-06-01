import { useContext, useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl";
import "./map.css"
import axios from "axios";
import MapContext from "../../context/map-context";
import { useQuery } from "react-query"

const server = process.env.REACT_APP_LOCAL;

const Map = () => {
    
    const [lng, setLng] = useState(-38.5667341)
    const [lat, setLat] = useState(-6.8921462)
    const [zoom, setZoom] = useState(13)

    // Pega as informações que são enviadas via contexto
    // const { geolocation } = useContext(MapContext)

    const getMapPoints = () => {
        const data = axios.get(`${server}/getGeolocation`)
                        .then((response) => {
                            return response.data
                        })
        return data
    }

    const mapPoint = useQuery(
        "mapPoints", 
        getMapPoints, 
        {
            retry: 5, //Repete a requisição 5 vezes caso a primeira requisição der errado
            refetchOnWindowFocus: true, //Repete a requisição sempre que o usuário volta para a página
            refetchInterval: 300000 //Repete a requisição por determinado período de tempo em ms

        }    
    )

    const mapNode = useRef(null);

    /**
     * Renderização do mapa
     */
    const renderMap = async () => {

        const node = mapNode.current;
        
        if(typeof window === "undefined" || node === null) return;
        
        const mapboxMap = new mapboxgl.Map({
            container: node,
            accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom
        })

        mapPoint.data.map((feature:any) => {
            new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(mapboxMap)
        })

        return () => mapboxMap.remove()
    }

    useEffect(() => {
        renderMap()
    }, [])

    return (
        // console.log(mapPoint),
        <div>
            <div ref={mapNode} className="map-container"/>
        </div>
    )
}

export default Map