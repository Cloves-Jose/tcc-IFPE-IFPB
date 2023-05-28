import { useState } from "react"
import { Button, Col, Form, Row, Modal } from "react-bootstrap"

import axios from "axios"

const server = process.env.REACT_APP_LOCAL

const FormRegisterCategory = (props: any) => {

    const date = new Date
    
    const [validated, setValidated] = useState(false)
    const [category, setCategory] = useState("")
    const [actualDate] = useState(date.toISOString())
    
    const handleSubit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPtopagation();
        }

        setValidated(true)
        postForm()
        event.preventDefault()
    }

    const postForm = async () => {
        await axios.post(`${server}/registerCategory`, {
            title: category,
            created_at: actualDate
        }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.error(e)
        })
    }
    
    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="row needs-validation" style={{ justifyContent: "center", padding: "15px" }} noValidate validated={validated} onSubmit={handleSubit}>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Título</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={category => setCategory(category.target.value)}
                            />
                            <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1" style={{ marginLeft: "12px" }}>
                        <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }} type="submit">Salvar</Button>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default FormRegisterCategory