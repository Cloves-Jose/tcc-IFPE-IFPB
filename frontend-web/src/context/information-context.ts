import React, { createContext } from "react"

const Information = {
    currentInfo: <any>[],
    setCurrentInfo: <any>[]
}

const InformationContext = createContext(Information)

export default InformationContext