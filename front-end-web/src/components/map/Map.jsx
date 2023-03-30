import React, { useEffect } from "react";
import "./Map.css"
import mapboxgl from "mapbox-gl";
import { useRef, useState } from "react";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default (props) => {
    const mapContainer = useRef(null)
    const map = useRef(null)

    const [lng, setLgn] = useState(-38.5525926);
    const [lat, setLat] = useState(-6.897518);
    const [zoom, setZomm] = useState(13)

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