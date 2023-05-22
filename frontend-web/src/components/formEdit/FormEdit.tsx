import { useState } from "react"
import { Formik } from "formik"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/esm/Container';
import { FormControl } from 'react-bootstrap'

import axios from "axios"

const server = process.env.REACT_APP_LOCAL

const FormEdit = (props: any) => {

    const date = new Date

    const [validated, setValidated] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [actualDate] = useState(date.toISOString())
    const [zone, setZone] = useState("")
    const [file, setFile] = useState<any>([])
    const [dangerousness, setDangerousness] = useState("")
    const [street, setStreet] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [menace, setMenace] = useState("")
    const [risk, setRisk] = useState("")

    const [riskValidator, setRiskValidator] = useState("")
    // const handleSubmit = (event:any) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true)
    //     postForm()
    //     event.preventDefault()
    // }


    // const postForm = async () => {
    //     await axios.post(`${server}/register`, {
    //         name: title,
    //         photo: "https://img.freepik.com/fotos-gratis/tiro-de-angulo-alto-de-duas-escavadeiras-em-um-canteiro-de-obras_181624-7771.jpg?w=1380&t=st=1675361902~exp=1675362502~hmac=22859b6ce31bdbc02a28630f129f0eb20a7ed927e7754fd1a6b19b299c878e53",
    //         zone: zone,
    //         dangerousness: dangerousness,
    //         street: street,
    //         neighborhood: neighborhood,
    //         risk: risk,
    //         description: description,
    //         created_at: actualDate
    //     })
    // }

    return (
        <Modal show={props.show} onHide={props.onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Formik
                        initialValues={{
                            name: props?.data?.name,
                            description: props?.data?.description,
                            risk: props?.data?.risk

                        }}
                        validate={values => {
                            let errors = {};
                        }}
                        onSubmit={() => console.log("Foi")}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form id="fooId" className="row needs-validation" style={{ justifyContent: "center", padding: "15px" }} noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group controlId="validationTitle">
                                    <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Título</Form.Label>
                                        <FormControl
                                            disabled={false}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        >
                                        </FormControl>
                                        {/* <Form.Control
                                            required
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        /> */}
                                    <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                                    <div className="form-text" >Este será o título exibido no aplicativo mobile</div>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group controlId="validationImage">
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
                                                    value={values.risk}
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
                                                    value={values.risk}
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
                                <Form.Group controlId="validationDescription">
                                    <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Descrição</Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        style={{ maxHeight: "100px", minHeight: "100px", height: "100px" }}
                                        maxLength={200}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                    <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                                    <div className="form-text" >Esta será a descrição exibida no aplicativo mobile</div>
                                </Form.Group>
                            </Row>
                            <Col style={{ marginLeft: "12px" }}>
                                <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }} type="submit" form="fooId">Salvar</Button>
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