import { Row, Col, Container } from "react-bootstrap"
import LoginModal from "../loginModal/loginModal"
import BackgroundVideo from "../backgroundVideo/backgroundVideo"

const LoginPage = () => {
    return (
        <div style={{ backgroundColor: "var(--color-blue)", paddingBottom: "15vh", paddingTop: "15vh", overflow: "hidden" }}>
            <LoginModal/>
        </div>
    )
}

export default LoginPage