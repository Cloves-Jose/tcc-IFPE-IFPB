import { useContext, useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl";
import "./map.css"
import axios from "axios";
import MapContext from "../../context/map-context";

// const server = process.env.REACT_APP_LOCAL;

const Map = () => {
    
    const [lng, setLng] = useState(-38.5667341)
    const [lat, setLat] = useState(-6.8921462)
    const [zoom, setZoom] = useState(13)
    // const [geoLocation, setGeolocation] = useState<any[]>([])

    // Pega as informações que são enviadas via contexto
    const { geolocation } = useContext(MapContext)
    
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

        geolocation.map((feature:any) => {
            new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(mapboxMap)
        })

        return () => mapboxMap.remove()
    }

    useEffect(() => {
        renderMap()
    }, [])

    return (
        <div>
            <div ref={mapNode} className="map-container"/>
        </div>
    )
}

export default Map