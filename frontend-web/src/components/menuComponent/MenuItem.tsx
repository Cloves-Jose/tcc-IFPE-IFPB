import { FC } from "react";
import "./MenuItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

interface MenuItem {
    href: string,
    icon: any,
    title: string
}

const MenuItem: FC<MenuItem> = (props) => {
    return (
        <Link style={{ fontSize: "0.9em", fontFamily: "Montserrat" }} to={props.href} className="menu-item">
            <FontAwesomeIcon icon={props.icon} style={{ marginRight: "5px" }}/>
            {props.title}
        </Link>
    )
}

export default MenuItem