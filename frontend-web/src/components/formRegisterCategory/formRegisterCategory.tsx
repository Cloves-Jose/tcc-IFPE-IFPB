import { useState } from "react"
import { Button, Col, Form, Row, Modal } from "react-bootstrap"

const FormRegisterCategory = (props: any) => {
    
    const [category, setCategory] = useState("")
    
    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Form className="row needs-validation" style={{ justifyContent: "center", padding: "15px" }}>

                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Título</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={category => setCategory(category.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-1" style={{ marginLeft: "12px" }}>
                    <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }}>Salvar</Button>
                </Row>
            </Form>
        </Modal>
    )
}

export default FormRegisterCategory