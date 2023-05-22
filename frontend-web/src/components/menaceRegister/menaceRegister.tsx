import { useState } from "react"
import Header from "../templates/Header"
import GridReactQueryProvider from "../grid/grid"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import FormRegister from "../formRegister/FormRegister"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const MenaceRegister = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div style={{ backgroundColor: "var(--color-page)" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <Header title="Ameaças" subtitle="Aqui será possível cadastrar novas ameaças"/>
                </div>
            </div>
            <FormRegister show={show} onHide={handleClose} title="Cadastrar ameaça"/>
            <hr/>
            <Container>
                <Row className="mb-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
                            <h4 style={{ fontWeight: "400", color: "var(--color-blue)", fontFamily: "Montserrat" }}>
                                Cadastrar ameaça
                            </h4>
                        </div>
                        <div style={{ marginLeft: "15px" }}>
                            <Button variant="light" onClick={handleShow} style={{ width: "50px", height: "50px" }}>
                                <FontAwesomeIcon icon={faPlus} style={{ color: "var(--color-blue)" }} size="xl"/>
                            </Button>
                        </div>
                    </div>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div style={{ marginLeft: "30px" }}>
                            <GridReactQueryProvider/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default MenaceRegister