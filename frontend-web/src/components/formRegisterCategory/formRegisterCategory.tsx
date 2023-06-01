import { useState } from "react"
import { Button, Col, Form, Row, Modal, Container } from "react-bootstrap"
import { Formik } from "formik"
import { actualDate } from "../../helpers/DateHour"

import axios from "axios"

const server = process.env.REACT_APP_LOCAL

const FormRegisterCategory = (props: any) => {

    const date = actualDate()

    let JsonSend_sector = {}
    
    const [validated, setValidated] = useState(false)
    const [category, setCategory] = useState("")
    // const [actualDate] = useState(date.toISOString())
    const [showFeedbackTitle, setShowFeedbackTitle] = useState(false)
    
    
    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Formik
                        initialValues={{ title: '' }}
                        validate={values => {
                            let errors:any = {}
                            setCategory(values.title)

                            if(!values.title) {
                                errors["title"] = 'Preencha este campo corretamente!'
                                setShowFeedbackTitle(true)
                            } else {
                                setShowFeedbackTitle(false)
                            }

                            return errors
                        }}
                        onSubmit={async () => {
                            JsonSend_sector = {
                                "title": category,
                                "created_at": date
                            }

                            await axios.post(`${server}/registerCategory`, JsonSend_sector)
                                .then((res) => {
                                    props.onHide()
                                    props.refetch()
                                }).catch((e) => {
                                    console.log(e)
                                })
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            handleBlur,
                            isSubmitting
                        }) => (
                            <Form className="row needs-validation" style={{ justifyContent: "center", padding: "15px" }} noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Título</Form.Label>
                                        <Form.Control
                                            isInvalid={showFeedbackTitle}
                                            placeholder="Informe um título para a categoria"
                                            aria-label="Informe um título para a categoria"
                                            // required
                                            type="text"
                                            id="title"
                                            name="title"
                                            autoComplete="title"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title}
                                            // onChange={category => setCategory(category.target.value)}
                                        />
                                        <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-1" style={{ marginLeft: "12px" }}>
                                    <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }} type="submit">Salvar</Button>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default FormRegisterCategory