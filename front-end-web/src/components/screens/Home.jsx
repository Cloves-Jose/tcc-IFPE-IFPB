import React, { useEffect } from "react";
import "./Home.css"
import mapboxgl from "mapbox-gl";
import { useRef, useState } from "react";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default (props) => {
    const mapContainer = useRef(null)
    const map = useRef(null)

    const [lng, setLgn] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZomm] = useState(9)

    useEffect(() => {
        if(map.current) return; //initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        })
    })
    
    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}