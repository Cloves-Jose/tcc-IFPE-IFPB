import { FC } from "react"
import "./Header.css"

interface Header {
    title: string,
    subtitle: string
}

const Header: FC<Header> = (props) => {
    return (
        <header className="header-screens">
            <h2>{props.title}</h2>
            <h5 style={{ color: "#899499" }}>{props.subtitle}</h5>
        </header>
    )
}

export default Header;