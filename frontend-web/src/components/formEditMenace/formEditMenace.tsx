import { useEffect, useState } from "react"
import { Formik } from "formik"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/esm/Container';
import { FormControl } from 'react-bootstrap'
import { actualDate } from "../../helpers/DateHour" 

import axios from "axios"

const server = process.env.REACT_APP_LOCAL

const FormEdit = (props: any) => {

    let JsonSend = {}

    const date = actualDate()

    const [validated, setValidated] = useState(false)
    const [dangerousness, setDangerousness] = useState("")
    const [risk, setRisk] = useState("")

    const [riskValidator, setRiskValidator] = useState("")

    const [id, setCurrentId] = useState("")
    const [title, setCurrentTitle] = useState("")
    const [description, setCurrentDescription] = useState("")
    const [feedbackTitle, setFeedbackTitle] = useState(false)
    const [feedbackDescription, setFeedbackDescription] = useState(false)

    return (
        <Modal show={props.show} onHide={props.onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Formik
                        initialValues={{ id: props?.data?.id, title: props?.data?.title, description: props?.data?.description }}
                        validate={(values) => {
                            let errors: any = {}

                            setCurrentId(values.id)
                            setCurrentTitle(values.title)
                            setCurrentDescription(values.description)

                            if(!values?.title) {
                                errors["title"] = 'Preencha este campo'
                                setFeedbackTitle(true)
                            } else {
                                setFeedbackTitle(false)
                            }

                            if(!values.description) {
                                errors["description"] = 'Preencha este campo'
                                setFeedbackDescription(true)
                            } else {
                                setFeedbackDescription(false)
                            }

                        }}
                        onSubmit={async (values) => {
                            JsonSend = {
                                "id": id,
                                "title": title,
                                "description": description,
                                "updated_at": date
                            }
                            console.log(JsonSend)
                            await axios.put(`${server}/update/${values.id}`, JsonSend)
                            .then((res) => {
                                props.onHide()
                                props.callback()
                            })
                            .catch((e) => {
                                console.error(e)
                            })
                        }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <Form id="fooId" className="row needs-validation" style={{ justifyContent: "center", padding: "15px" }} noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group>
                                    <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Título</Form.Label>
                                        <FormControl
                                            isInvalid={feedbackTitle}
                                            placeholder="Informe um título!"
                                            aria-label="Informe um título!"
                                            type="title"
                                            id="title"
                                            name="title"
                                            autoComplete="title"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title}
                                        >
                                        </FormControl>
                                    <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Preencha corretamente!</Form.Control.Feedback>
                                    <div className="form-text" >Este será o título exibido no aplicativo mobile</div>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Image</Form.Label>
                                        <Form.Control
                                            required
                                            type="file"
                                        />
                                        <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                                        <div className="form-text" >Esta será a imagem exibida no aplicativo mobile</div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Grau de ameaça</Form.Label>
                                            <Form.Select 
                                                
                                                onChange={value => setDangerousness(value.target.value)}
                                            >
                                                <option value="Baixa" >Baixa</option>
                                                <option value="Médio">Média</option>
                                                <option value="Alta">Alta</option>
                                            </Form.Select>
                                        <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                        <div className="form-text">Esta informação será de uso interno</div>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat", paddingBottom: "10px" }}>Oferece risco de infecção em humanos ou animais?</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Check
                                                    inline
                                                    label="Sim"
                                                    type={"radio"}
                                                    checked={risk === "1"}
                                                    onChange={() => { setRiskValidator("1") }}
                                                    onBlur={handleBlur}
                                                    // value={values.risk}
                                                    onClick={() => setRisk("1")}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Check
                                                    inline
                                                    label="Não"
                                                    type={"radio"}
                                                    checked={risk === "0"}
                                                    onChange={() => { setRiskValidator("0") }}
                                                    onBlur={handleBlur}
                                                    // value={values.risk}
                                                    onClick={() => setRisk("0")}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="form-text" style={{ paddingTop: "5px"}}>Esta informação será de uso interno</div>
                                </Col>
                                <Col>
                                    <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Categoria da ameaça</Form.Label>
                                    <Form.Select>
                                        <option value="Baixa" >Baixa</option>
                                        <option value="Médio">Média</option>
                                        <option value="Alta">Alta</option>
                                    </Form.Select> 
                                    <div className="form-text">Esta informação será de uso interno</div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group>
                                    <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Descrição</Form.Label>
                                    <FormControl
                                        isInvalid={feedbackDescription}
                                        placeholder="Informe uma descrição!"
                                        arial-label="Informe uma descrição!"
                                        type="description"
                                        id="description"
                                        name="description"
                                        autoComplete="description"
                                        as="textarea"
                                        style={{ maxHeight: "100px", minHeight: "100px", height: "100px" }}
                                        maxLength={200}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    ></FormControl>

                                    <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                                    <div className="form-text" >Esta será a descrição exibida no aplicativo mobile</div>
                                </Form.Group>
                            </Row>
                            <Col style={{ marginLeft: "12px", marginRight: "12px", display: "flex", justifyContent: "space-between" }}>
                                <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }} type="submit" form="fooId">Salvar</Button>
                                <Button style={{ width: "100px", fontFamily: "Montserrat", backgroundColor:"#D3D3D3", fontSize: "0.8em", border: "none" }} variant='light' form="fooId">Cancelar</Button>
                            </Col>
                        </Form>
                    )} 
                    </Formik>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default FormEdit