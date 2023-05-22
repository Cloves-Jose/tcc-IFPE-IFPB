import React, { createContext } from "react"

const MapDefaultValue = {
    geolocation: <any>[],
    setGeolocation: <any>[]
}

const MapContext = createContext(MapDefaultValue);

export default MapContext