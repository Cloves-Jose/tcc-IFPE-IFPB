import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'

import axios from "axios"

const server = process.env.REACT_APP_LOCAL

const FormRegister = (props: any) => {

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

    const handleSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            // event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true)
        postForm()
        // event.preventDefault()
    }


    const postForm = async () => {
        await axios.post(`${server}/register`, {
            name: title,
            photo: "https://img.freepik.com/fotos-gratis/tiro-de-angulo-alto-de-duas-escavadeiras-em-um-canteiro-de-obras_181624-7771.jpg?w=1380&t=st=1675361902~exp=1675362502~hmac=22859b6ce31bdbc02a28630f129f0eb20a7ed927e7754fd1a6b19b299c878e53",
            zone: zone,
            dangerousness: dangerousness,
            street: street,
            neighborhood: neighborhood,
            risk: risk,
            description: description,
            created_at: actualDate
        })
    }

    return (
        <Modal show={props.show} onHide={props.onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Form className="row needs-validation" style={{ justifyContent: "center", padding: "15px" }} noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group controlId="validationTitle">
                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Título</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={title => setTitle(title.target.value)}
                        />
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
                {/* <Row className="mb-3">
                    <Form.Label>Selecione a zona onde à ameaça foi localizada</Form.Label>
                    <Col>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Zona urbana"
                                type={"radio"}
                                checked={zone === "1"}
                                onClick={() => setZone("1")}
                                feedbackType="invalid"

                            />
                            <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Check
                                inline
                                label="Zona rural"
                                type={"radio"}
                                checked={zone === "0"}
                                onClick={() => setZone("0")}
                            />
                        </Form.Group>
                    </Col>
                    <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                    <div className="form-text">Esta informação será de uso interno</div>
                </Row> */}
                {/* <Row className="mb-3">
                    <Form.Label>Ameaça próximo de rios, nascentes, corregos ou açudes?</Form.Label>
                    <Col>
                        <Form.Group>
                            <Form.Check
                                inline
                                label="Sim"
                                type={"radio"}
                                checked={menace === "1"}
                                onClick={() => setMenace("1")}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Check
                                inline
                                label="Não"
                                type={"radio"}
                                checked={menace === "0"}
                                onClick={() => setMenace("0")}
                            />
                        </Form.Group>
                    </Col>
                    <div className="form-text">Esta informação será de uso interno</div>
                </Row> */}
                {/* <Row className="mb-3">
                    <Form.Label>Localização da ameaça</Form.Label>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                placeholder="Rua"
                                required
                                type="text"
                                onChange={street => setStreet(street.target.value)}
                            />
                            <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                placeholder="Bairro"
                                required
                                type="text"
                                onChange={neighborhood => setNeighborhood(neighborhood.target.value)}
                            />
                            <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <div className="form-text" >Esta informação será de uso interno</div>
                </Row> */}
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
                            onChange={description => setDescription(description.target.value)}
                        />
                        <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                        <div className="form-text" >Esta será a descrição exibida no aplicativo mobile</div>
                    </Form.Group>
                </Row>
                <Col style={{ marginLeft: "12px" }}>
                    <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }} type="submit">Salvar</Button>
                </Col>
            </Form>
        </Modal>
    )
}

export default FormRegister