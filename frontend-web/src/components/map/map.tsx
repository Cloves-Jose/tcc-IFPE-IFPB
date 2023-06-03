import { useContext, useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl";
import "./map.css"
import axios from "axios";
import MapContext from "../../context/map-context";
import { useQuery } from "react-query"
import Loading from "../loading/loading";

const server = process.env.REACT_APP_LOCAL;

const Map = () => {
    
    const [lng, setLng] = useState(-38.5667341)
    const [lat, setLat] = useState(-6.8921462)
    const [zoom, setZoom] = useState(13)
    const [coordinates, setCoordinates] = useState("")
    // Pega as informações que são enviadas via contexto
    // const { geolocation } = useContext(MapContext)

    const { data, isLoading, error } = useQuery("mapPoints", () => {
        return axios.get(`${server}/getGeolocation`)
                    .then((response) => response.data)
        },
        {
            retry: 5,
            // refetchOnWindowFocus: true,
            refetchInterval: 3000000
        }
    )

    const findingAddresFromCoordinates = async (coodinates: [long: string, lat: string]) => {
        await axios.get(`http://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/${coodinates[0]},${coodinates[1]}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
                    .then((response) => {
                        return response.data
                    })

    }
    

    const mapNode = useRef(null);


    // console.log(data)

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

        if(data !== undefined) {
            data?.map((feature:any) => {
                new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).setPopup(new mapboxgl.Popup().setHTML(feature.properties.title)).addTo(mapboxMap)
            })
        } 


        return () => mapboxMap.remove()
    }

    useEffect(() => {
        renderMap()
    }, [renderMap])

    return (
        <div>
            <div ref={mapNode} className="map-container"/>
        </div>
    )
}

export default Map